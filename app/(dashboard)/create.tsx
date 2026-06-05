import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';

const Create = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} >Create</ThemedText>
    </ThemedView>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})