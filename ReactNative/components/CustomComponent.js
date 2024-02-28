import {View, Text} from 'react-native'

export default function CustomComponents({name}){
  return(
    <View style= {{flex: 1, backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <Text>Hello {name}</Text>
    </View>
  )
}