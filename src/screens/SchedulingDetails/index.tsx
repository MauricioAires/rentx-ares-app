import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import {
  Acceleration,
  Exchange,
  Force,
  Gasoline,
  People,
  Speed,
} from "../../assets";

import * as S from "./styles";

export function SchedulingDetails() {
  const theme = useTheme();
  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => {}} />
      </S.Header>

      <S.CardImagens>
        <ImageSlider
          imagesUrl={[
            "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png",
          ]}
        />
      </S.CardImagens>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>Lamborghini</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.Description>
          <S.Rent>
            <S.Period>Ao dia</S.Period>
            <S.Price>R$ 500,00</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          <Accessory name="380km/h" icon={Speed} />
          <Accessory name="3.2s" icon={Acceleration} />
          <Accessory name="800 HP" icon={Force} />
          <Accessory name="Gasolina" icon={Gasoline} />
          <Accessory name="Auto" icon={Exchange} />
          <Accessory name="2 pessoas" icon={People} />
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
            <S.DateValue>18/08/2024</S.DateValue>
          </S.DateInfo>
          <Feather
            size={RFValue(12)}
            name="chevron-right"
            color={theme.colors.text}
          />
          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue>18/08/2024</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>Total</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>R$ 580 x3 diárias</S.RentalPriceQuota>
            <S.RentalPriceTotal>R$ 2.900</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>
      <S.Footer>
        <Button title="Confirmar" />
      </S.Footer>
    </S.Container>
  );
}
