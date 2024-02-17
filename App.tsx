import React from "react";
import { Home } from "./src/screens/Home";

import { FontsProvider } from "./src/providers/fonts";
import { ThemeProvider } from "./src/providers/theme";
import { CarDetails } from "./src/screens/CarDetails";
import { GestureHandlerProvier } from "./src/providers/gesture-handler";
import { Scheduling } from "./src/screens/Scheduling";
import { SchedulingDetails } from "./src/screens/SchedulingDetails";
import { SchedulingCompleted } from "./src/screens/SchedulingCompleted";

export default function App() {
  return (
    <FontsProvider>
      <ThemeProvider>
        <GestureHandlerProvier>
          {/* <Home /> */}
          {/* <CarDetails /> */}
          {/* <Scheduling /> */}
          {/* <SchedulingDetails /> */}
          <SchedulingCompleted />
        </GestureHandlerProvier>
      </ThemeProvider>
    </FontsProvider>
  );
}
