import { useEffect, useState } from "react";
import { StatusBar, FlatList } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { Car } from "../../components/Car";
import { CarDTO } from "../../dtos/carDTO";
import { api } from "../../services/api";
import { BackButton } from "../../components/BackButton";
import { Load } from "../../components/Load";

import * as S from "./styles";

interface CarProps {
  id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const theme = useTheme();
  function handleBack() {
    navigation.goBack();
  }

  const totalCarScheduled = cars.length;

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get<unknown, CarProps[]>(
          "/schedules_byuser?user_id=1",
        );

        setCars(response);
      } catch (error) {
        console.log(error);
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
          <BackButton color={theme.colors.shape} onPress={() => handleBack()} />

          <S.Title>Seus agendamentos,{"\n"}estão aqui.</S.Title>

          <S.SubTitle>Conforto, segurança e praticidade.</S.SubTitle>
        </S.Header>
        {loading ? (
          <Load />
        ) : (
          <S.Content>
            <S.Appointment>
              <S.AppointmentsTitle>Agendamentos feitos</S.AppointmentsTitle>
              <S.AppointmentsQuantity>
                {totalCarScheduled}
              </S.AppointmentsQuantity>
            </S.Appointment>

            <FlatList
              data={cars}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <S.CarWrapper>
                  <Car data={item.car} />
                  <S.CarFooter>
                    <S.CarFooterTitle>Período</S.CarFooterTitle>
                    <S.CarFooterPeriod>
                      <S.CarFooterDate>{item.startDate}</S.CarFooterDate>
                      <AntDesign
                        name="arrowright"
                        size={20}
                        color={theme.colors.title}
                        style={{
                          marginHorizontal: 10,
                        }}
                      />
                      <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
                    </S.CarFooterPeriod>
                  </S.CarFooter>
                </S.CarWrapper>
              )}
            />
          </S.Content>
        )}
      </S.Container>
    </>
  );
}
