import {View, Text, StyleSheet, Dimensions} from 'react-native'

export default function Views(){
  return(
    <View style= {styles.container}>
      <View style = {styles.box}>
        <Text style= {styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "plum", 
        alignItems:'center',
        justifyContent: 'center',
        padding: 30
    },
    box:{
        width: windowWidth > 500 ? "70%" : "90%",
        height: windowHeight > 600 ? "60%" : "90%",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: windowWidth > 500 ? 50 : 24,
    }
})