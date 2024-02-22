import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
} from "react-native-reanimated";

import { Brand, Logo } from "../../assets";

import * as S from "./styles";

export function Splash() {
  const splashAnimation = useSharedValue(0); // 0 => 50 frames

  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [0, -50],
          "clamp",
        ),
      },
    ],
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
    transform: [
      {
        translateX: interpolate(
          splashAnimation.value,
          [0, 50],
          [-50, 0],
          "clamp",
        ),
      },
    ],
  }));

  useEffect(() => {
    splashAnimation.value = withTiming(50, {
      duration: 1500,
    });
  }, []);

  return (
    <S.Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <Brand width={80} height={50} />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <Logo width={180} height={20} />
      </Animated.View>
    </S.Container>
  );
}
