import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import PokemonCard from './src/screens/PokemonCard'

export default function App() {
  return (
    <SafeAreaView>
      <PokemonCard/>
    </SafeAreaView>
  )
}