import { useState } from 'react';

import api from '../../services/api';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './style';

const NewHabit = ({
  habitName,
  setHabitName,
  weekdays,
  setWeekdays,
  setIsNewHabitOpen,
  handleLoadHabits
}) => {
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);

      await api.post('/trackit/habits', {
        name: habitName,
        days: weekdays
      });

      handleLoadHabits();
      setIsNewHabitOpen(false);
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
      setHabitName('');
      setWeekdays([]);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit} data-test="habit-create-container">
      <Input
        required
        value={habitName}
        placeholder="nome do hábito"
        isLoading={isLoading}
        data-test="habit-name-input"
        onChange={e => setHabitName(e.target.value)}
      />

      <S.ContainerWeekdays>
        {days.map(day => (
          <S.WeekdayButton
            key={day.id}
            type="button"
            disabled={isLoading}
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
          disabled={isLoading}
          onClick={() => setIsNewHabitOpen(false)}
          data-test="habit-create-cancel-btn"
        />
        <Button
          width="90px"
          height="35px"
          color="primary"
          text="Salvar"
          fontSize="16px"
          isLoading={isLoading}
          data-test="habit-create-save-btn"
        />
      </S.ContainerButtons>
    </S.Form>
  );
};

export default NewHabit;
