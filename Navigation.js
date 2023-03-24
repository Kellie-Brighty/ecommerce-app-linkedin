import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/Unathenticated/LandingScreen";
import SignupScreen from "./screens/Unathenticated/SignupScreen";
import LoginScreen from "./screens/Unathenticated/LoginScreen";
import HomeScreen from "./screens/Authenticated/HomeScreen";
import { View, Text, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const UnauthenticatedScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AuthenticatedScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Page = () => {
  return (
    <View styles={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default function Navigation() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    console.log(isUser);
  }, []);

  return (
    <NavigationContainer>
      {isUser ? <AuthenticatedScreens /> : <UnauthenticatedScreens />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
