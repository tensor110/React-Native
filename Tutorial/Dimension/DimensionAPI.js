import {View, Text, StyleSheet} from 'react-native'

export default function Views(){
  return(
    <View style= {styles.container}>
      <View style = {styles.box}>
        <Text style= {styles.text}>Welcome!</Text>
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
        width: 300,
        height: 300,
        backgroundColor: 'ligthblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 24
    }
})