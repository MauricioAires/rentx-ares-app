import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";

import { getPlatformDate } from "../../utils/formatters/get-platform-date";
import { Arrow } from "../../assets";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  MarkedDatesProps,
  generateInterval,
} from "../../components/Calendar";
import { BackButton } from "../../components/BackButton";
import { CarDTO } from "../../dtos/carDTO";

import * as S from "./styles";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface SchedulingScreenParams {
  car: CarDTO;
}

export function Scheduling() {
  const theme = useTheme();
  const route = useRoute();
  const { car } = route.params as SchedulingScreenParams;

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>(
    {} as MarkedDatesProps,
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );

  const navigation = useNavigation();

  const hasRentalPeriodSelected =
    !rentalPeriod.startFormatted || !rentalPeriod.endFormatted;

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleDateChange(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval({
      start,
      end,
      mainColor: theme.colors.main,
      mainLightColor: theme.colors.main_light,
    });

    setMarkedDates(interval);

    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(start.timestamp)),
        "dd/MM/yyyy",
      ),
      endFormatted: format(
        getPlatformDate(new Date(end.dateString)),
        "dd/MM/yyyy",
      ),
    });
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
          <BackButton color={theme.colors.shape} onPress={() => handleBack()} />

          <S.Title>
            Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
          </S.Title>
          <S.RentalPeriod>
            <S.DateInfo>
              <S.DateTitle>De</S.DateTitle>
              <S.DateValueWrapper selected={!!rentalPeriod.startFormatted}>
                <S.DateValue>{rentalPeriod.startFormatted}</S.DateValue>
              </S.DateValueWrapper>
            </S.DateInfo>

            <Arrow />

            <S.DateInfo>
              <S.DateTitle>Até</S.DateTitle>
              <S.DateValueWrapper selected={!!rentalPeriod.endFormatted}>
                <S.DateValue>{rentalPeriod.endFormatted}</S.DateValue>
              </S.DateValueWrapper>
            </S.DateInfo>
          </S.RentalPeriod>
        </S.Header>

        <S.Content>
          <Calendar markedDates={markedDates} onDayPress={handleDateChange} />
        </S.Content>
        <S.Footer>
          <Button
            title="Confirmar"
            enabled={!hasRentalPeriodSelected}
            onPress={() => handleConfirmRental()}
          />
        </S.Footer>
      </S.Container>
    </>
  );
}
