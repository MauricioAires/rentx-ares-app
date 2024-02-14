import React from "react";
import { Home } from "./src/screens/Home";

import { FontsProvider } from "./src/providers/fonts";
import { ThemeProvider } from "./src/providers/theme";

export default function App() {
  return (
    <ThemeProvider>
      <FontsProvider>
        <Home />
      </FontsProvider>
    </ThemeProvider>
  );
}
