import { RectButtonProps } from "react-native-gesture-handler";

import { accessoryIcon } from "../../utils/mappers/get-accessory-icon";
import { priceFormatter } from "../../utils/formatters/price-formatter";
import { CarDTO } from "../../dtos/carDTO";

import * as S from "./styles";

export interface CarProps extends RectButtonProps {
  data: CarDTO;
}

export function Car({
  data: { brand, name, rent, thumbnail, fuel_type },
  ...rest
}: CarProps) {
  const MotorIcon = accessoryIcon(fuel_type);

  return (
    <S.Container {...rest}>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Name>{name}</S.Name>
        <S.About>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>{priceFormatter(rent.price)}</S.Price>
          </S.Rent>

          <S.Type>
            <MotorIcon />
          </S.Type>
        </S.About>
      </S.Details>
      <S.CardImage
        source={{
          uri: thumbnail,
        }}
        resizeMode="contain"
      />
    </S.Container>
  );
}
