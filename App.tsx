import React from "react";
import { Home } from "./src/screens/Home";

import { FontsProvider } from "./src/providers/fonts";
import { ThemeProvider } from "./src/providers/theme";
import { CarDetails } from "./src/screens/CarDetails";
import { GestureHandlerProvier } from "./src/providers/gesture-handler";

export default function App() {
  return (
    <FontsProvider>
      <ThemeProvider>
        <GestureHandlerProvier>
          {/* <Home /> */}
          <CarDetails />
        </GestureHandlerProvier>
      </ThemeProvider>
    </FontsProvider>
  );
}
