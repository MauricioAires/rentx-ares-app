import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { Arrow } from "../../assets";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { BackButton } from "../../components/BackButton";

import * as S from "./styles";

export function Scheduling() {
  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Container>
        <S.Header>
          <BackButton color={theme.colors.shape} onPress={() => {}} />

          <S.Title>
            Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
          </S.Title>
          <S.RentalPeriod>
            <S.DateInfo>
              <S.DateTitle>De</S.DateTitle>
              <S.DateValueWrapper selected={true}>
                <S.DateValue>18/06/2024</S.DateValue>
              </S.DateValueWrapper>
            </S.DateInfo>

            <Arrow />

            <S.DateInfo>
              <S.DateTitle>Até</S.DateTitle>
              <S.DateValueWrapper selected={false}>
                <S.DateValue></S.DateValue>
              </S.DateValueWrapper>
            </S.DateInfo>
          </S.RentalPeriod>
        </S.Header>

        <S.Content>
          <Calendar />
        </S.Content>
        <S.Footer>
          <Button title="Confirmar" onPress={() => handleConfirmRental()} />
        </S.Footer>
      </S.Container>
    </>
  );
}
