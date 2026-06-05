import { View, type ViewProps, type StyleProp, useColorScheme, StyleSheet, Text, TextStyle } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';

type ThemedTextProps = ViewProps & {
    style?: StyleProp<TextStyle>;
    title?: boolean;
}

const ThemedText = ({style, title= false, ...props}: ThemedTextProps) => {

    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme]

    const textColor = title ? theme.title : theme.text

  return <Text style={[{ color: textColor }, style]} {...props} />
}

export default ThemedText