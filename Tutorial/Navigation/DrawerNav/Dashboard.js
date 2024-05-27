import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Dashboard({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Button title='Toggle Drawer' onPress={() => navigation.toggleDrawer()} />
      <Button title='Setting' onPress={() => navigation.jumpTo("Setting")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
  });