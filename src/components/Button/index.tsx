import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";
import { useTheme } from "styled-components";

export interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
}

export function Button({
  title,
  color,
  loading = false,
  enabled,
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  const isLoading = loading === true;
  return (
    <S.Container {...rest} enabled={enabled} color={color} loading={loading}>
      <S.Title>
        {isLoading ? <ActivityIndicator color={theme.colors.shape} /> : title}
      </S.Title>
    </S.Container>
  );
}
