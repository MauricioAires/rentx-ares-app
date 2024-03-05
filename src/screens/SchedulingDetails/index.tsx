import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";

import { getPlatformDate } from "../../utils/formatters/get-platform-date";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import { CarDTO } from "../../dtos/carDTO";
import { accessoryIcon } from "../../utils/mappers/get-accessory-icon";
import { priceFormatter } from "../../utils/formatters/price-formatter";
import { api } from "../../services/api";

import * as S from "./styles";

interface SchedulingDetailsScreenParams {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as SchedulingDetailsScreenParams;

  const totalDaysScheduled = dates.length;
  const rentalTotal = totalDaysScheduled * car.rent.price;

  async function handleConfirm() {
    setIsLoading(true);

    const schedulesByCar = await api.get<any, { unavailable_dates: string[] }>(
      `/schedules_bycars/${car.id}`,
    );

    const unavailableDates = [...schedulesByCar.unavailable_dates, ...dates];

    await api.post("schedules_byuser", {
      user_id: 1,
      car,
      startDate: rentalPeriod.start,
      endDate: rentalPeriod.end,
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: unavailableDates,
      })
      .then(() => {
        navigation.navigate("SchedulingCompleted");
      })
      .catch(() => {
        Alert.alert("Opss", "Não foi possível confirmar o agendamento.");

        setIsLoading(false);
      });
  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[totalDaysScheduled - 1])),
        "dd/MM/yyyy",
      ),
    });
  }, []);

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => handleBack()} />
      </S.Header>

      <S.CardImagens>
        <ImageSlider imagesUrl={car.photos} />
      </S.CardImagens>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>
          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>{priceFormatter(car.rent.price)}</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {car.accessories?.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={accessoryIcon(accessory.type)}
            />
          ))}
        </S.Accessories>
        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather
              size={RFValue(24)}
              name="calendar"
              color={theme.colors.background_primary}
            />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue>{rentalPeriod.start}</S.DateValue>
          </S.DateInfo>
          <Feather
            size={RFValue(12)}
            name="chevron-right"
            color={theme.colors.text}
          />
          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue>{rentalPeriod.end}</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>Total</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>
              {priceFormatter(car.rent.price)} x{totalDaysScheduled} diárias
            </S.RentalPriceQuota>
            <S.RentalPriceTotal>
              {priceFormatter(rentalTotal)}
            </S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>
      <S.Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={() => handleConfirm()}
          loading={isLoading}
          enabled={!isLoading}
        />
      </S.Footer>
    </S.Container>
  );
}
