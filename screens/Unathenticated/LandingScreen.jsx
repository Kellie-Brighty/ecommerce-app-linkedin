import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import DeliveryMan from "../../assets/delivery_logo.png";
import DeliciousBurger from "../../assets/delicious-burger.png";
import { theme } from "../../assets/theme";
import Button from "../components/Button";

const LandingScreen = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate("SignupScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={DeliciousBurger} style={styles.image} />

      <View style={styles.text_container}>
        <View>
          <Text style={styles.title}>Order your favourite food</Text>
          <Text style={styles.subTitle}>
            Welcome to the world of deliciousness! Order your favourite food and
            enjoy every bite!
          </Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <Button text="Next" action={goToLogin} />
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: 400,
    height: 400,
  },
  text_container: {
    width: 350,
  },
  title: {
    fontSize: 30,
    fontFamily: theme.bold,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontFamily: theme.normal,
    marginTop: 30,
    textAlign: "center",
    lineHeight: 25,
  },
  btnContainer: {
    marginTop: 50,
  },
});
