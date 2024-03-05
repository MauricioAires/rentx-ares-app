import { GestureHandlerRootView } from "react-native-gesture-handler";

export function GestureHandlerProvier({ children }: React.PropsWithChildren) {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      {children}
    </GestureHandlerRootView>
  );
}
