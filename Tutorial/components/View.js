import {View} from 'react-native'

export default function Views(){
  return(
    <View style= {{flex: 1, backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <View style= {{height:200, width:200, backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      </View>
    </View>
  )
}