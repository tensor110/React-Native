import { Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CardOne from '../components/cardOne'
import { charmanderData, squirtleData, bulbasaurData, pikachuData } from '../data/CardOneData'

export default function PokemonCard() {
  return (
    <ScrollView style = {styles.container}>
      <CardOne {...charmanderData}/>
      <CardOne {...squirtleData}/>
      <CardOne {...bulbasaurData}/>
      <CardOne {...pikachuData}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f5f5f5",
    }
})