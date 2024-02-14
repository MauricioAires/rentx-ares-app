import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;

    background-color: ${theme.colors.background_primary};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 113px;

    background-color: ${theme.colors.header};

    justify-content: flex-end;
    padding: 32px 24px;
  `}
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TotalCars = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.primary_400};
  `}
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24,
    gap: 16,
  },
  showsVerticalScrollIndicator: false,
})`
  gap: 20px;
`;
