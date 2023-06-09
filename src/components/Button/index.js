import { ThreeDots } from 'react-loader-spinner';
import * as S from './style';

const Button = ({
  color,
  text,
  width,
  height,
  fontSize,
  isLoading,
  typeButton,
  hasLoadingMode = true,
  ...props
}) => {
  return (
    <S.ButtonContainer
      color={color}
      width={width}
      height={height}
      fontSize={fontSize}
      disabled={isLoading}
      {...props}
    >
      {isLoading && hasLoadingMode ? (
        <ThreeDots
          height="13px"
          radius="9"
          color="#FFF"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      ) : (
        text
      )}
    </S.ButtonContainer>
  );
};

export default Button;
