import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    width: 100%;
    height: 126px;

    background-color: ${theme.colors.background_secondary};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
  `}
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};

    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.title};

    font-size: ${RFValue(15)}px;
  `}
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};

    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.main};

    font-size: ${RFValue(15)}px;
  `}
`;

export const Type = styled.View``;

export const CardImage = styled.Image`
  width: 167px;
  height: 85px;
`;
