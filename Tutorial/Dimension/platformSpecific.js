import {View, Text, StyleSheet, SafeAreaView, Platform} from 'react-native'
import CustomButton from './PlatformCompo/CustomButton'

export default function Views(){
  return(
    <SafeAreaView style={styles.styleContainer}>
    <View style= {styles.container}>
      <View style = {styles.box}>
        <Text style = {{color: 'white'}}>Welcome!!!</Text>
        {/* We can use .android.js and .ios.js two different files to achieve two different styles  */}
        <CustomButton title= 'Press me' onPress={()=> alert("Pressed!")}/>
      </View>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    styleContainer:{
        flex: 1,
        backgroundColor: 'plum'
    },
    container: {
        flex: 1, 
        backgroundColor: "plum", 
        // To get platform specific code 
        padding: Platform.OS === 'android'? 30 : 0
    },
    box:{
        // To get platform specific code we also use platform.select
        ...Platform.select({
            ios:{
                backgroundColor: 'white',
                fontSize: 24,
                color: 'green'
            },
            android:{
                backgroundColor: 'black',
                fontSize: 28,
                color: 'white'
            }
        }),
        alignItems: 'center',
        justifyContent: 'center'
    },
})