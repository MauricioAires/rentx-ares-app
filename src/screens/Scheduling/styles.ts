import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background_secondary};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.header};

    align-items: flex-start;
    padding: 25px;

    padding-top: ${getStatusBarHeight() + 30}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(34)}px;

    margin-top: 24px;
  `}
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 32px 0;
`;

export const DateInfo = styled.View`
  ${({ theme }) => css`
    width: 30%;
  `}
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
  `}
`;

export const DateValue = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
  `}
`;

interface DateValueProps {
  selected: boolean;
}

/**
 * O elemento Text no IOS não suporta a utilização de border
 * dessa forma é necessário criar wrapper por volta do text para
 * adicionar o border
 */
export const DateValueWrapper = styled.View<DateValueProps>`
  ${({ theme, selected }) => css`
    ${!selected &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: 5px;
    `}
  `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.background_secondary};
    padding: 24px 24px ${getBottomSpace() + 24}px;
  `}
`;
