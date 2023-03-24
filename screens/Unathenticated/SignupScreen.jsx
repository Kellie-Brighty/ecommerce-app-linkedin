import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../../assets/theme";
import SubLogo from "../../assets/sublogo.png";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../components/Button";
import { FontAwesome } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image source={SubLogo} style={styles.image} />
        <View style={styles.formContainer}>
          {/* User name */}
          <View
            style={[
              styles.inputContainer,
              {
                backgroundColor: username ? theme.white : theme.background,
                borderColor: username ? theme.primary : "none",
                borderWidth: username ? 1 : 0,
              },
            ]}
          >
            <Feather
              name="user"
              size={24}
              color={username ? theme.primary : theme.black}
            />
            <TextInput
              placeholder="User name"
              style={styles.input}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          {/* Full name */}
          <View
            style={[
              styles.inputContainer,
              {
                backgroundColor: fullname ? theme.white : theme.background,
                borderColor: fullname ? theme.primary : "none",
                borderWidth: fullname ? 1 : 0,
              },
            ]}
          >
            <FontAwesome
              name="pencil"
              size={24}
              color={fullname ? theme.primary : theme.black}
            />
            <TextInput
              placeholder="Full name"
              style={styles.input}
              value={fullname}
              onChangeText={(text) => setFullname(text)}
            />
          </View>

          {/* Email Input */}
          <View
            style={[
              styles.inputContainer,
              {
                backgroundColor: email ? theme.white : theme.background,
                borderColor: email ? theme.primary : "none",
                borderWidth: email ? 1 : 0,
              },
            ]}
          >
            <Feather
              name="mail"
              size={24}
              color={email ? theme.primary : theme.black}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize={"none"}
              keyboardType="email-address"
            />
          </View>

          {/* Password Input */}
          <View
            style={[
              styles.passwordInputContainer,
              {
                backgroundColor: password ? theme.white : theme.background,
                borderColor: password ? theme.primary : "none",
                borderWidth: password ? 1 : 0,
              },
            ]}
          >
            <Feather
              name="lock"
              size={24}
              color={password ? theme.primary : theme.black}
            />
            <TextInput
              placeholder="Password"
              style={styles.passwordInput}
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize={"none"}
              keyboardType="visible-password"
              secureTextEntry={passwordVisible}
            />
            {passwordVisible ? (
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Feather
                  name="eye"
                  size={24}
                  color={password ? theme.primary : theme.black}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Feather
                  name="eye-off"
                  size={24}
                  color={password ? theme.primary : theme.black}
                />
              </TouchableOpacity>
            )}
          </View>

          {/* Agreed Section */}
          <View style={styles.rememberForgot}>
            <TouchableOpacity
              style={styles.rememberContainer}
              onPress={() => setAgreed(!agreed)}
            >
              {agreed ? (
                <FontAwesome5
                  name="dot-circle"
                  size={24}
                  color={theme.secondary}
                />
              ) : (
                <FontAwesome5 name="circle" size={24} color={theme.secondary} />
              )}
              <Text style={[styles.rememberText, { marginLeft: 5 }]}>
                Agree with terms and conditions
              </Text>
            </TouchableOpacity>
          </View>

          {/* Button Section */}
          <View style={styles.btnContainer}>
            <Button text="Sign up" />
          </View>
        </View>

        {/* Down Part */}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.finalText}>
              Have an account? <Text style={styles.signupText}>Login.</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: 190,
    height: 150,
  },
  formContainer: {},
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    height: 48,
    borderRadius: 8,
    paddingLeft: 16,
    marginVertical: 10,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    height: 48,
    borderRadius: 8,
    paddingLeft: 16,
    marginVertical: 10,
  },
  input: {
    height: "100%",
    width: "100%",
    paddingLeft: 16,
    fontFamily: theme.normal,
    fontSize: 16,
  },
  passwordInput: {
    height: "100%",
    paddingLeft: 16,
    fontFamily: theme.normal,
    fontSize: 16,
    width: "80%",
  },
  rememberForgot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 16,
    fontFamily: theme.normal,
    color: theme.secondary,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  finalText: {
    fontFamily: theme.normal,
    color: theme.secondary,
    fontSize: 18,
  },
  signupText: {
    color: theme.primary,
  },
});
