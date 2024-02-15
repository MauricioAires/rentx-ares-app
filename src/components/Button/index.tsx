import * as S from "./styles";

export interface ButtonProps {
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
