import { useState } from 'react';

import api from '../../services/api';
import useApp from '../../hooks/useApp';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './style';

const NewHabit = ({
  setIsNewHabitOpen,
  handleLoadHabits,
  isLoadingNewHabit,
  setIsLoadingNewHabit
}) => {
  const [habitName, setHabitName] = useState('');
  const [weekdays, setWeekdays] = useState([]);

  const { setTotalHabits } = useApp();

  const days = [
    { id: 0, name: 'D' },
    { id: 1, name: 'S' },
    { id: 2, name: 'T' },
    { id: 3, name: 'Q' },
    { id: 4, name: 'Q' },
    { id: 5, name: 'S' },
    { id: 6, name: 'S' }
  ];

  const handleSelectDay = day => {
    if (weekdays.includes(day.id)) {
      const newWeekdays = weekdays.filter(weekday => weekday !== day.id);
      setWeekdays(newWeekdays);
    } else {
      setWeekdays(prevState => [...prevState, day.id]);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (habitName.length === 0) {
        alert('O nome não pode ser vazio');
      }

      if (weekdays.length === 0) {
        alert('Selecione pelo menos um dia da semana');
      }

      if (habitName.length > 0 && weekdays.length > 0) {
        setIsLoadingNewHabit(true);

        await api.post('/trackit/habits', {
          name: habitName,
          days: weekdays
        });

        // const newHabits = [...habits];
        // newHabits.push(data);
        // setHabits(newHabits);

        setIsNewHabitOpen(false);
        setTotalHabits(prevState => prevState + 1);

        setHabitName('');
        setWeekdays([]);

        handleLoadHabits();
      }
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsLoadingNewHabit(false);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit} data-test="habit-create-container">
      <Input
        value={habitName}
        placeholder="nome do hábito"
        isLoading={isLoadingNewHabit}
        data-test="habit-name-input"
        onChange={e => setHabitName(e.target.value)}
      />

      <S.ContainerWeekdays>
        {days.map(day => (
          <S.WeekdayButton
            key={day.id}
            type="button"
            disabled={isLoadingNewHabit}
            isSelected={weekdays.includes(day.id)}
            onClick={() => handleSelectDay(day)}
            data-test="habit-day"
          >
            {day.name}
          </S.WeekdayButton>
        ))}
      </S.ContainerWeekdays>

      <S.ContainerButtons>
        <Button
          width="90px"
          height="35px"
          color="secondary"
          text="Cancelar"
          type="button"
          fontSize="16px"
          disabled={isLoadingNewHabit}
          onClick={() => setIsNewHabitOpen(false)}
          data-test="habit-create-cancel-btn"
        />
        <Button
          width="90px"
          height="35px"
          color="primary"
          text="Salvar"
          fontSize="16px"
          isLoading={isLoadingNewHabit}
          data-test="habit-create-save-btn"
        />
      </S.ContainerButtons>
    </S.Form>
  );
};

export default NewHabit;
