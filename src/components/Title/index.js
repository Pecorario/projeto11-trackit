import * as S from './style';

const Title = ({ text, page }) => {
  return <S.Container data-test={page}>{text}</S.Container>;
};

export default Title;
