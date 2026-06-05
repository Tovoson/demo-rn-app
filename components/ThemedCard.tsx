import { View, type ViewProps, ViewStyle, type StyleProp, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';

type ThemedCardProps = ViewProps & {
    style?: StyleProp<ViewStyle>;
}

const ThemedCard = ({style, ...props}: ThemedCardProps) => {

    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme]

  return <View style={[{ backgroundColor: theme.uiBackground }, styles.card, style]} {...props} />
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    }
})