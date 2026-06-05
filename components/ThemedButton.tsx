import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';

type ThemedButtonProps = {
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

const ThemedButton = ({style, ...props}: ThemedButtonProps) => {
  return (
    <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
        {...props}
     />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.7,
  },
});
