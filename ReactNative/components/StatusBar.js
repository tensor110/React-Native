import {View, StatusBar} from 'react-native'

export default function StatusBars(){
  return(
    <View style= {{flex: 1, backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <StatusBar backgroundColor='black' barStyle='light-content'  />
    </View>
  )
}