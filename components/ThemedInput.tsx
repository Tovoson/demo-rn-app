import {
  StyleProp,
  TextInput,
  TextStyle,
  useColorScheme,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

type ThemedInputProps = {
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  value?: string;

  onChangeText?: (text: string) => void;
};

const ThemedInput = ({ style, ...props }: ThemedInputProps) => {
  const colorSheme = useColorScheme() ?? "light";
  const theme = Colors[colorSheme];

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 10,
          borderRadius: 5,
          width: "80%",
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedInput;
