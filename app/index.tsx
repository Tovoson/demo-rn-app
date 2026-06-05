import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Acc from "../assets/img/images.png";
import { Moon, Sun } from "lucide-react-native";
import React from "react";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedCard from "../components/ThemedCard";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={Acc}
        style={{ width: 50, height: 50, tintColor: "blue" }}
      />
      <ThemedLogo />
      <Spacer />

      <ThemedText title={true} style={{ fontSize: 24 }}>
        Home
      </ThemedText>

      <Spacer />

      <ThemedText>
        Navigate to the about and contact screens using the links below.
      </ThemedText>

      <Spacer />

      <ThemedCard>
        <ThemedText>This is the home screen of the app.</ThemedText>
      </ThemedCard>
      <Link
        href="/login"
        style={{ marginTop: 20, textDecorationLine: "underline" }}
      >
        <ThemedText>Login</ThemedText>
      </Link>
      <Link
        href="/register"
        style={{ marginTop: 20, textDecorationLine: "underline" }}
      >
        <ThemedText>Register</ThemedText>
      </Link>
      <Link
        href="/profile"
        style={{ marginTop: 20, textDecorationLine: "underline" }}
      >
        <ThemedText>Profile</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
