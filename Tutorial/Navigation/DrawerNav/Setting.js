import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting Screen</Text>
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