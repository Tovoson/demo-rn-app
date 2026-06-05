import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';

const Book = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} >Book</ThemedText>
    </ThemedView>
  )
}

export default Book

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})