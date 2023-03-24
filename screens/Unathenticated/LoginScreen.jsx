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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const goToSignup = () => {
    // navigation.navigate("SignupScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image source={SubLogo} style={styles.image} />
        <View style={styles.formContainer}>
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

          {/* Remember and Forgot */}
          <View style={styles.rememberForgot}>
            <TouchableOpacity
              style={styles.rememberContainer}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe ? (
                <FontAwesome5
                  name="dot-circle"
                  size={24}
                  color={theme.secondary}
                />
              ) : (
                <FontAwesome5 name="circle" size={24} color={theme.secondary} />
              )}
              <Text style={[styles.rememberText, { marginLeft: 5 }]}>
                Remember me?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.rememberText} t>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Button Section */}
          <View style={styles.btnContainer}>
            <Button text="Login" action={goToSignup} />
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={styles.finalText}>
              Don't have an account?{" "}
              <Text style={styles.signupText}>Sign up.</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

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
    justifyContent: "space-between",
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
