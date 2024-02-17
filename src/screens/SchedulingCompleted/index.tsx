import { StatusBar, useWindowDimensions } from "react-native";

import { LogoBackgroundGray, Done } from "../../assets";
import { ConfirmButton } from "../../components/ConfirmButton";

import * as S from "./styles";

export function SchedulingCompleted() {
  const { width } = useWindowDimensions();

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Container>
        <LogoBackgroundGray width={width} />

        <S.Content>
          <Done width={80} height={80} />

          <S.Title>Carro alugado</S.Title>
          <S.Message>
            Agora você só precisa ir{`\n`}até a concessionaria da RENTX{`\n`}
            pegar o seu automóvel.
          </S.Message>
        </S.Content>

        <S.Footer>
          <ConfirmButton title="Ok" />
        </S.Footer>
      </S.Container>
    </>
  );
}
