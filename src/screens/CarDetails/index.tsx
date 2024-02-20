import { useNavigation, useRoute } from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import { CarDTO } from "../../dtos/carDTO";
import { priceFormatter } from "../../utils/formatters/price-formatter";

import * as S from "./styles";
import { accessoryIcon } from "../../utils/mappers/get-accessory-icon";

interface CarDetailsScreenParams {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as CarDetailsScreenParams;

  function handleConfirmRental() {
    navigation.navigate("Scheduling");
  }

  function handleBack() {
    navigation.goBack();
  }

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
        <S.About>{car.about}</S.About>
      </S.Content>
      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => handleConfirmRental()}
        />
      </S.Footer>
    </S.Container>
  );
}
