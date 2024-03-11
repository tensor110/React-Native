import {View, Text, StyleSheet, useWindowDimensions} from 'react-native'

export default function Views(){
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height
  return(
    <View style= {styles.container}>
      <View style = {[styles.box,{
        width: windowWidth > 500 ? "70%" : "90%",
        height: windowHeight > 600 ? "60%" : "90%",
}]}>
        <Text style= {{ fontSize: windowWidth > 500 ? 50: 24}}>Welcome!</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "plum", 
        alignItems:'center',
        justifyContent: 'center',
        padding: 30
    },
    box:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
})