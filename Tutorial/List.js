import { View, Text } from 'react-native'
import React from 'react'
import List from './List/List'
import FlatList from './List/FlatList'
import SectionList from "./List/SectionList"

export default function Lists() {
  return (
    <View>
      {/* <List/> */}
      {/* <FlatList /> */}
      <SectionList/>
    </View>
  )
}