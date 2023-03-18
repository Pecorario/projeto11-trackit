import { SyncLoader } from 'react-spinners';

import * as S from './style';

export default function Loading() {
  return (
    <S.Container>
      <SyncLoader color="#52B6FF" />
    </S.Container>
  );
}
