import { useEffect, useState } from 'react';

import api from '../../services/api';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import Title from '../../components/Title';

import * as S from './style';

const Today = () => {
  const [habits, setHabits] = useState([]);
  const [currentWeekDay, setCurrentWeekDay] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');

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
      const data = await api.get('/trackit/habits/today');

      setHabits(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    handleLoadTodayHabits();

    const weekday = days[dayjs().day()];

    setCurrentWeekDay(weekday);
    setDay(dayjs().date());
    setMonth(dayjs().month() + 1);
  }, []);

  return (
    <S.Container>
      <Title page="today" text={`${currentWeekDay}, ${day}/${month}`} />
      <span>Nenhum hábito concluído ainda</span>

      {habits.length > 0 && habits.map(habit => <p>{habit.name}</p>)}
    </S.Container>
  );
};

export default Today;
