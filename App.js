import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";

export default function App() {
  const [loaded] = useFonts({
    "Montserrat-normal": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-bold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "Dancing-script-medium": require("./assets/fonts/DancingScript-Medium.ttf"),
    "Dancing-script-bold": require("./assets/fonts/DancingScript-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
