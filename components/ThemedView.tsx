import {
  type ViewProps,
  ViewStyle,
  type StyleProp,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type ThemedViewProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
  safe?: boolean;
};

const ThemedView = ({ style, safe = false, ...props }: ThemedViewProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  if (!safe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );

  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
      {...props}
    />
  );
};

export default ThemedView;
