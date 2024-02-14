import { Gasoline } from "../../assets";
import { priceFormatter } from "../../utils/formatters/price";
import * as S from "./styles";

export interface ICar {
  brand: string;
  name: string;
  thumbnail: string;
  rent: {
    period: string;
    price: number;
  };
}

export interface CarProps {
  data: ICar;
}

export function Car({ data: { brand, name, rent, thumbnail } }: CarProps) {
  return (
    <S.Container>
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
