import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Logo } from "../../assets";
import { Car } from "../../components/Car";

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

        <Car
          data={{
            brand: "Audi",
            name: "AS 5 Turbo",
            thumbnail:
              "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png",
            rent: {
              period: "Ao dia",
              price: 120,
            },
          }}
        />
      </S.Container>
    </>
  );
}
