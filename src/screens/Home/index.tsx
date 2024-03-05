import React, { useState, useEffect } from "react";
import {
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";

import { api } from "../../services/api";
import { Logo } from "../../assets";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { CarDTO } from "../../dtos/carDTO";

import * as S from "./styles";

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function Home() {
  const theme = useTheme();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: positionX.value,
      },
      {
        translateY: positionY.value,
      },
    ],
  }));

  const gesture = Gesture.Manual().onTouchesMove((e) => {
    const { x, y, absoluteX, absoluteY } = e.changedTouches[0];

    if (e.eventType === 1) {
      positionX.value = absoluteX;
      positionY.value = absoluteY;

      return;
    }

    positionX.value = x;
    positionY.value = y;
  });

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

            <S.TotalCars>Total {cars.length} carros</S.TotalCars>
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

        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              myCarsButtonStyle,
              {
                position: "absolute",
                bottom: 13,
                right: 22,
              },
            ]}
          >
            <ButtonAnimated
              onPress={handleMyCars}
              style={[
                styles.button,
                {
                  backgroundColor: theme.colors.main,
                },
              ]}
            >
              <Ionicons name="car-sport" size={32} color={theme.colors.shape} />
            </ButtonAnimated>
          </Animated.View>
        </GestureDetector>
      </S.Container>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,

    justifyContent: "center",
    alignItems: "center",
  },
});
