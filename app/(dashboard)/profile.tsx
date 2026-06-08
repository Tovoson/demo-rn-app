import { StyleSheet, Text } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { useUser } from '../../hooks/useUser';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';

const Profile = () => {

  const {logout, authUser} = useUser();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error: any) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} >Profile</ThemedText>
      <Spacer height={20} />
      
        <ThemedText>Email: {authUser.email}</ThemedText>
      
      <Spacer height={20} />
      <ThemedButton onPress={handleLogout}>
        <Text style={{color:"#f2f2f2"}}>Logout</Text>
      </ThemedButton>

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