import api from '../../services/api';
import useApp from '../../hooks/useApp';

import checkImg from '../../assets/check.svg';

import * as S from './style';

const TodayHabit = ({ habit, habits, setHabits, handleLoadTodayHabits }) => {
  const { setIsLoading, setDoneHabits } = useApp();

  const handleClick = async () => {
    try {
      setIsLoading(true);

      // const newHabits = [...habits];
      // const habitIndex = habits.findIndex(item => item.id === habit.id);

      if (habit.done) {
        await api.post(`/trackit/habits/${habit.id}/uncheck`);
        setDoneHabits(prevState => prevState - 1);
      } else {
        await api.post(`/trackit/habits/${habit.id}/check`);
        setDoneHabits(prevState => prevState + 1);
      }

      handleLoadTodayHabits();
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container data-test="today-habit-container">
      <S.TextsContainer>
        <S.Title data-test="today-habit-name">{habit.name}</S.Title>

        <S.Text>
          Sequência atual:
          <S.Span data-test="today-habit-sequence" isGreen={habit.done}>
            {' '}
            {habit.currentSequence}{' '}
            {habit.currentSequence === 1 ? 'dia' : 'dias'}
          </S.Span>
        </S.Text>
        <S.Text>
          Seu recorde:
          <S.Span
            data-test="today-habit-record"
            isGreen={
              habit.currentSequence === habit.highestSequence &&
              habit.highestSequence > 0
            }
          >
            {' '}
            {habit.highestSequence}{' '}
            {habit.highestSequence === 1 ? 'dia' : 'dias'}
          </S.Span>
        </S.Text>
      </S.TextsContainer>

      <S.Button
        onClick={handleClick}
        isDone={habit.done}
        data-test="today-habit-check-btn"
      >
        <img src={checkImg} alt="Marcar como feito" />
      </S.Button>
    </S.Container>
  );
};

export default TodayHabit;
