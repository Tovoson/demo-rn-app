import { useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';
import { Moon, Sun } from 'lucide-react-native';

const ThemedLogo = () => {
    const colorTheme = useColorScheme() ?? 'light';
    const logo = colorTheme === 'dark' ? <Moon size={50} color="white" /> : <Sun size={50}/>;

  return logo
}

export default ThemedLogo