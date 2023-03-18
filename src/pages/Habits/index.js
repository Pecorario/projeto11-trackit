import { useEffect, useState, useRef } from 'react';
import { GoPlus } from 'react-icons/go';

import api from '../../services/api';
import useApp from '../../hooks/useApp';

import Title from '../../components/Title';
import Button from '../../components/Button';
import NewHabit from '../../components/NewHabit';
import Habit from '../../components/Habit';

import * as S from './style';

const Habits = () => {
  const [isNewHabitOpen, setIsNewHabitOpen] = useState(false);
  const [habits, setHabits] = useState(undefined);
  const [habitName, setHabitName] = useState('');
  const [weekdays, setWeekdays] = useState([]);

  const ref = useRef(null);

  const { isLoading, setIsLoading } = useApp();

  const handleLoadHabits = async () => {
    try {
      setIsLoading(true);

      const { data } = await api.get('/trackit/habits');

      setHabits(data);
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenNewHabit = () => {
    ref.current.scrollTo({ top: 0, behavior: 'smooth' });
    setIsNewHabitOpen(true);
  };

  useEffect(() => {
    handleLoadHabits();
  }, []);

  return (
    <S.Container>
      <S.TitleContainer>
        <Title text="Meus hábitos" />
        <Button
          width="40px"
          height="35px"
          color="primary"
          text={<GoPlus />}
          onClick={handleOpenNewHabit}
          data-test="habit-create-btn"
        />
      </S.TitleContainer>
      {!isLoading && (
        <S.ContainerHabits ref={ref}>
          {isNewHabitOpen && (
            <NewHabit
              habitName={habitName}
              setHabitName={setHabitName}
              setIsNewHabitOpen={setIsNewHabitOpen}
              weekdays={weekdays}
              setWeekdays={setWeekdays}
              handleLoadHabits={handleLoadHabits}
            />
          )}

          {habits !== undefined &&
            habits.length > 0 &&
            habits.map(item => (
              <Habit
                key={item.id}
                id={item.id}
                name={item.name}
                selectedDays={item.days}
                handleLoadHabits={handleLoadHabits}
              />
            ))}

          {habits !== undefined && habits.length === 0 && (
            <S.Span>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </S.Span>
          )}
        </S.ContainerHabits>
      )}
    </S.Container>
  );
};

export default Habits;
