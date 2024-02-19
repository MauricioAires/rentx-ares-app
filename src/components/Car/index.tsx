import { RectButtonProps } from "react-native-gesture-handler";

import { Gasoline } from "../../assets";
import { priceFormatter } from "../../utils/formatters/price";
import { CarDTO } from "../../dtos/carDTO";

import * as S from "./styles";

export interface CarProps extends RectButtonProps {
  data: CarDTO;
}

export function Car({
  data: { brand, name, rent, thumbnail },
  ...rest
}: CarProps) {
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
            <Gasoline />
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
