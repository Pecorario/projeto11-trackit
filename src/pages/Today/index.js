import { useEffect, useState } from 'react';

import api from '../../services/api';
import useApp from '../../hooks/useApp';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import Title from '../../components/Title';

import * as S from './style';
import TodayHabit from '../../components/TodayHabit';

const Today = () => {
  const [habits, setHabits] = useState([]);
  const [currentWeekDay, setCurrentWeekDay] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');

  const { setIsLoading, percentage, setDoneHabits, setTotalHabits } = useApp();

  const days = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ];

  // console.log(dayjs().locale('pt-br').format().day());

  const handleLoadTodayHabits = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/trackit/habits/today');

      const filteredData = data.filter(item => item.done === true);

      setTotalHabits(data.length);
      setDoneHabits(filteredData.length);

      setHabits(data);
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoadTodayHabits();

    const weekday = days[dayjs().day()];
    const monthFormated = (dayjs().month() + 1).toLocaleString('pt-BR', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });

    setCurrentWeekDay(weekday);
    setDay(dayjs().date());
    setMonth(monthFormated);
  }, []);

  return (
    <S.Container>
      <S.TitleContainer>
        <Title page="today" text={`${currentWeekDay}, ${day}/${month}`} />
        <S.Text hasSomeHabitDone={percentage > 0} data-test="today-counter">
          {percentage === 0
            ? 'Nenhum hábito concluído ainda'
            : `${percentage}% dos hábitos concluídos`}
        </S.Text>
      </S.TitleContainer>

      <S.TodayHabitsContainer>
        {habits.length > 0 &&
          habits.map(habit => (
            <TodayHabit
              key={habit.id}
              habit={habit}
              habits={habits}
              setHabits={setHabits}
              handleLoadTodayHabits={handleLoadTodayHabits}
            />
          ))}
      </S.TodayHabitsContainer>
    </S.Container>
  );
};

export default Today;
