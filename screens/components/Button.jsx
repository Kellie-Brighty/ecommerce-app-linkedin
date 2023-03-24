import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../assets/theme";

const Button = ({ text, icon, action }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={action}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: theme.primary,
    width: 300,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  btnText: {
    color: theme.white,
    fontSize: 18,
    fontFamily: theme.bold,
  },
});
