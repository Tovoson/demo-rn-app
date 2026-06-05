import { StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} >Profile</ThemedText>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})