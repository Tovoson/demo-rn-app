import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/UserContext";

const RootLayout = () => {
  const ColorScheme = useColorScheme() ?? "light";
  const theme = Colors[ColorScheme];

  return (
    <UserProvider>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  ); //return all pages (about, contact, index) in stack navigation
};

export default RootLayout;

const styles = StyleSheet.create({});
