import {View, Text, StyleSheet, Dimensions} from 'react-native'
// Drawbacks of DimensionAPI 
// It did not change the height and width automatically while rotating, we have to restart for achieving proper aspect-ratio 
// To prevent this 
import React, { useState, useEffect } from 'react';

export default function Views(){
  const [winDimensions, setwinDimensions] = useState({
    window: Dimensions.get("window")
  });

  useEffect(()=>{
    const subscription = Dimensions.addEventListener("change", ({window})=>{
      setwinDimensions({window})
    })
    return () => subscription?.remove();
  })

  const {window} = winDimensions;
  const windowWidth= window.width;
  const windowHeight = window.height;  
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

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "plum", 
        alignItems:'center',
        justifyContent: 'center',
        padding: 30
    },
    box:{
        // width: windowWidth > 500 ? "70%" : "90%",
        // height: windowHeight > 600 ? "60%" : "90%",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // text:{
    //     fontSize: windowWidth > 500 ? 50 : 24,
    // }
})