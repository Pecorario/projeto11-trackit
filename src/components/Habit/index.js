import api from '../../services/api';
import useApp from '../../hooks/useApp';

import trashImg from '../../assets/trash.svg';

import * as S from './style';

const Habit = ({ id, name, selectedDays, handleLoadHabits }) => {
  const days = [
    { id: 0, name: 'D' },
    { id: 1, name: 'S' },
    { id: 2, name: 'T' },
    { id: 3, name: 'Q' },
    { id: 4, name: 'Q' },
    { id: 5, name: 'S' },
    { id: 6, name: 'S' }
  ];

  const { setIsLoading } = useApp();

  const handleDeleteHabit = async () => {
    try {
      const response = window.confirm('Deseja realmente excluir este item?');

      if (response) {
        setIsLoading(true);

        await api.delete(`/trackit/habits/${id}`);

        handleLoadHabits();
      }
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container data-test="habit-container">
      <S.TrashIcon
        src={trashImg}
        alt="Deletar"
        onClick={handleDeleteHabit}
        data-test="habit-delete-btn"
      />

      <S.Title data-test="habit-name">{name}</S.Title>

      <S.ContainerWeekdays>
        {days.map(day => (
          <S.Weekday
            key={day.id}
            isSelected={selectedDays.includes(day.id)}
            data-test="habit-day"
          >
            {day.name}
          </S.Weekday>
        ))}
      </S.ContainerWeekdays>
    </S.Container>
  );
};

export default Habit;
