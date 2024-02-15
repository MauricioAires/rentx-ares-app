import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import {
  Acceleration,
  Exchange,
  Force,
  Gasoline,
  People,
  Speed,
} from "../../assets";

import * as S from "./styles";
import { Button } from "../../components/Button";

export function CarDetails() {
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
        <S.About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </S.About>
      </S.Content>
      <S.Footer>
        <Button title="Confirmar" />
      </S.Footer>
    </S.Container>
  );
}
