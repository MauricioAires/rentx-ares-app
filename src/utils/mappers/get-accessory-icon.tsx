import React from "react";
import { SvgProps } from "react-native-svg";
import {
  Acceleration,
  Exchange,
  Force,
  Gasoline,
  Energy,
  People,
  Speed,
  Hybrid,
  Car,
} from "../../assets";

const icons = {
  speed: Speed,
  acceleration: Acceleration,
  turning_diameter: Force,
  gasoline_motor: Gasoline,
  electric_motor: Energy,
  hybrid_motor: Hybrid,
  exchange: Exchange,
  seats: People,
};

export type AccessoryIconTypes = keyof typeof icons;

export function accessoryIcon(type: AccessoryIconTypes): React.FC<SvgProps> {
  const sgvRef = icons[type] ?? Car;

  return sgvRef;
}
