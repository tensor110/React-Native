import {View, Text} from 'react-native'

export default function Texts(){
  return(
    <View style= {{flex: 1, backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <Text style= {{color: "white"}}>Hello World</Text>
    </View>
  )
}