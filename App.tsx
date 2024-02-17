import React from "react";

import { FontsProvider } from "./src/providers/fonts";
import { ThemeProvider } from "./src/providers/theme";
import { GestureHandlerProvier } from "./src/providers/gesture-handler";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <FontsProvider>
      <ThemeProvider>
        <GestureHandlerProvier>
          <Routes />
        </GestureHandlerProvier>
      </ThemeProvider>
    </FontsProvider>
  );
}
