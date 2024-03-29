import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

export interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
  const theme = useTheme();

  return (
    <S.Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </S.Container>
  );
}
