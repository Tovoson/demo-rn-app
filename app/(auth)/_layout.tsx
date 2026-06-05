import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { account } from "../../lib/appwrite";
import { useEffect } from "react";

export default function AuthLayout() {
 
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{headerShown: false, animation: "none"}}/>
    </>
  );
};
