import { Text, StyleSheet, StatusBar, SafeAreaView, TextInput } from 'react-native'
import React,{useState} from 'react'

export default function Textinput() {
    const [name, setName]= useState("")
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName}
        placeholder='Enter Your Name'
        autoCorrect = {false}
        autoCapitalize= 'None'
        // secureTextEntry     //For password type
        // keyboardType='numeric'    //For number
      />
      <TextInput style = {[styles.input, styles.multilineText]} placeholder='Message'  multiline/>
      <Text style={styles.text}>My name is {name}</Text>
    </SafeAreaView>
  )
}

styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight
    },
    input:{
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        color: 'black'
    },
    text:{
        fontSize: 30,
        padding: 10
    },
    multilineText:{
        minHeight: 100,
        textAlignVertical: 'top'
    }
})