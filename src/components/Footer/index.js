import { buildStyles } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import * as S from './style';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <S.Container data-test="menu">
      <Button
        text="Hábitos"
        width="100%"
        height="30px"
        fontSize="18px"
        color="secondary"
        data-test="habit-link"
        onClick={() => navigate('/habitos')}
      />
      <S.BarContainer data-test="today-link" onClick={() => navigate('/hoje')}>
        <S.CircularBar
          value="50"
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            textColor: '#fff',
            pathColor: '#fff',
            trailColor: 'transparent'
          })}
        />
      </S.BarContainer>
      <Button
        text="Histórico"
        width="100%"
        height="30px"
        fontSize="18px"
        color="secondary"
        data-test="history-link"
        onClick={() => navigate('/historico')}
      />
    </S.Container>
  );
};

export default Footer;
