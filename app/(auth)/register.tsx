import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useUser } from "../../hooks/useUser";
import { Link } from "expo-router";

// Theme Components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedInput from "../../components/ThemedInput";
import { Colors } from "../../constants/Colors";

const Register = () => {
  const { register } = useUser();
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    setError(null); // Clear previous errors

    try {
      await register(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>

        <ThemedText title={true}>Register Page</ThemedText>

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

        <Spacer />

        <ThemedButton onPress={handleSubmit}>
          <Text>Register</Text>
        </ThemedButton>

        <Spacer />

        {error && <ThemedText style={styles.error}>{error}</ThemedText>}

        <Spacer />

        <Link href="/login">
          {" "}
          <ThemedText> Link to login page</ThemedText>
        </Link>

      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

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
