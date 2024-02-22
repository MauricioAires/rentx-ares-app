import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import { CarDTO } from "../../dtos/carDTO";
import { priceFormatter } from "../../utils/formatters/price-formatter";
import { accessoryIcon } from "../../utils/mappers/get-accessory-icon";

import * as S from "./styles";
import { useTheme } from "styled-components";

interface CarDetailsScreenParams {
  car: CarDTO;
}

export function CarDetails() {
  const theme = useTheme();

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y;
  });

  const headerStylesAnimation = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 200], [200, 70], "clamp"),
  }));

  const sliderCarsStylesAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 150], [1, 0], "clamp"),
  }));

  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as CarDetailsScreenParams;

  function handleConfirmRental() {
    navigation.navigate("Scheduling", {
      car,
    });
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Container>
        <Animated.View style={[headerStylesAnimation]}>
          <S.Header>
            <BackButton onPress={() => handleBack()} />
          </S.Header>
          <Animated.View style={[sliderCarsStylesAnimation]}>
            <S.CardImagens>
              <ImageSlider imagesUrl={car.photos} />
            </S.CardImagens>
          </Animated.View>
        </Animated.View>

        <Animated.ScrollView
          contentContainerStyle={{
            padding: 24,
            alignItems: "center",

            backgroundColor: theme.colors.background_secondary,
          }}
          showsVerticalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        >
          <S.Details>
            <S.Description>
              <S.Brand>{car.brand}</S.Brand>
              <S.Name>{car.name}</S.Name>
            </S.Description>
            <S.Rent>
              <S.Period>{car.rent.period}</S.Period>
              <S.Price>{priceFormatter(car.rent.price)}</S.Price>
            </S.Rent>
          </S.Details>

          <S.Accessories>
            {car.accessories?.map((accessory) => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={accessoryIcon(accessory.type)}
              />
            ))}
          </S.Accessories>
          <S.About>
            {car.about}
            {car.about}
            {car.about}
            {car.about}
            {car.about}
            {car.about}
            {car.about}
          </S.About>
        </Animated.ScrollView>

        <S.Footer>
          <Button
            title="Escolher período do aluguel"
            onPress={() => handleConfirmRental()}
          />
        </S.Footer>
      </S.Container>
    </>
  );
}
