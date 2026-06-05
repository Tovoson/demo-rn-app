import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

import { Link } from "expo-router";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";
import ThemedInput from "../../components/ThemedInput";
import { useUser } from "../../hooks/useUser";

const Login = () => {
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const { authUser, login } = useUser();

  const handleSubmit = async () => {
    setError(null); // Clear previous errors

    try {
      await login(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title={true}>Login Page</ThemedText>

        <Spacer height={50} />
        <ThemedInput
          placeholder="Email"
          style={{ padding: 15 }}
          keyboardType="email-address"
          onChangeText={(text) => setData({ ...data, email: text })}
          value={data.email}
        />

        <Spacer height={20} />
        <ThemedInput
          placeholder="Password"
          style={{ padding: 15 }}
          secureTextEntry
          onChangeText={(text) => setData({ ...data, password: text })}
          value={data.password}
        />

        <Spacer height={20} />
        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Login</Text>
        </ThemedButton>
        <Spacer height={30} />

        {error && <ThemedText style={styles.error}>{error}</ThemedText>}

        <Spacer height={30} />

        <Link href="/register">
          {" "}
          <ThemedText> Link to register page</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: Colors.warning,
    backgroundColor: "#fdf2f2",
    width: "80%",
    padding: 10,
    borderRadius: 5,
    textAlign: "left",
    lineHeight: 20,
    borderColor: Colors.warning,
    borderWidth: 1,
  },
});
