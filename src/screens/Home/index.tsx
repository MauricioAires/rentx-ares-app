import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Logo } from "../../assets";

import * as S from "./styles";

export function Home() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Container>
        <S.Header>
          <S.HeaderContent>
            <Logo width={RFValue(108)} height={RFValue(12)} />

            <S.TotalCars>Total 12 carros</S.TotalCars>
          </S.HeaderContent>
        </S.Header>
      </S.Container>
    </>
  );
}
