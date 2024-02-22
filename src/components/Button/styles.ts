import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface ContainerProps extends RectButtonProps {
  color?: string;
  loading: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, color, loading, enabled }) => css`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;
    background-color: ${color ? color : theme.colors.main};

    ${(enabled === false || loading) &&
    css`
      opacity: 0.6;
    `}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};
  `}
`;
