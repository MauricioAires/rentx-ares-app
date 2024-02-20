import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { api } from "../../services/api";
import { Logo } from "../../assets";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { CarDTO } from "../../dtos/carDTO";

import * as S from "./styles";

export function Home() {
  const theme = useTheme();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get<any, CarDTO[]>("/cars");

        setCars(response);
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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

        {loading ? (
          <Load />
        ) : (
          <S.CarList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Car data={item} onPress={() => handleCarDetails(item)} />
            )}
          />
        )}

        <S.MyCarsButton>
          <Ionicons
            onPress={() => handleMyCars()}
            name="car-sport"
            size={32}
            color={theme.colors.shape}
          />
        </S.MyCarsButton>
      </S.Container>
    </>
  );
}
