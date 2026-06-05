import { View, Text, ViewStyle } from 'react-native'
import React from 'react'

type SpacerProps = ViewStyle & {
    width?: number | string;
    height?: number | string;
    style?: ViewStyle;
}

const Spacer = ({width = "100%", height=20, style, ...props}: SpacerProps) => {
  return (
    <View style={[{ width, height }, style]} {...props}/>
  )
}

export default Spacer