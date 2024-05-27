import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen({navigation, route}) {
  // const navigation = useNavigation()   //We acn also use this instead of {navigation} prop
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Home Screen</Text>
      <Text style = {styles.text}>{route.params?.result}</Text>
      <Button title='Go to About' onPress={() => navigation.navigate("About",{name: "Lucky"})} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  }
})