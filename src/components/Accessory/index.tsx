import React from "react";
import { SvgProps } from "react-native-svg";
import * as S from "./styles";

export interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ icon: Icon, name }: AccessoryProps) {
  return (
    <S.Container>
      <Icon width={32} height={32} />

      <S.Name>{name}</S.Name>
    </S.Container>
  );
}
