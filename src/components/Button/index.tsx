import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

export interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest} color={color}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
