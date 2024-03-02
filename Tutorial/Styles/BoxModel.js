import { View, Text, StyleSheet } from "react-native";

export default function BoxModels(){
    return(
<View style={styles.container}>
    <View style={styles.darkMode}>
        <Text style= {styles.darkmodeText}>
            Style Inheritance 
            <Text style={styles.darkmodeBoldText}> In Bold</Text>
        </Text>
    </View>
      <View style={[styles.lightblueBg, styles.box, styles.boxShadow]}>
        <Text style={styles.title}>Light Blue Box</Text>
      </View>
      <View style={[styles.lightgreenBg, styles.box, styles.androidShadow]}>
        <Text style={styles.title}>Light Green Box</Text>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "plum", padding: 30 },
    darkMode:{
        backgroundColor: 'black',
        color: 'white'    //It will not applied into the Text component as inheritance dont work in native
    },
    darkmodeText:{
        color: 'white'
    },
    darkmodeBoldText:{
        fontWeight: 'bold'
    },
    box: {
      width: "50%",
      height: "25%",
      paddingHorizontal: 50,
      paddingVertical: 20,
      marginVertical: 10,
      borderWidth: 2,
      borderColor: "black",
      borderRadius: 5
    },
    lightblueBg: {
      backgroundColor: "lightblue",
    },
    lightgreenBg: {
      backgroundColor: "lightgreen",
    },
    title:{
        borderRadius: 5,
        backgroundColor: 'red'
    },
    // It is only applied to the ios device 
    boxShadow:{
        shadowColor:  'yellow',
        shadowOffset:{
            width: 6,
            height: 6
        },
        shadowOpacity: 0.6,
        shadowRadius: 4
    },
    // For android device 
    androidShadow:{
        elevation: 10
    }
  });