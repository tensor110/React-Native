import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
    FlatList
  } from "react-native";
  import React from "react";
  import pokemonList from "../data.json";
  
  export default function FlatLists() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style = {styles.scrollView}>
        <FlatList 
            data  = {pokemonList}
            renderItem = {({item})=>{
                return (
                    <View key={item.id} style = {styles.card}>
                      <Text style={styles.cardText}>{item.type}</Text>
                      <Text style={styles.cardText}>{item.name}</Text>
                    </View>
                  );
            }}
            keyExtractor={(item) => item.id.toString()}
            // horizontal
            ItemSeparatorComponent={<View style={{height: 16}} />}  //It is applied to all elements except top and bottom
            ListEmptyComponent={<Text style ={{fontSize: 20, textAlign: "center", paddingVertical: 40}}>No Items Found</Text>}  //It is applied when the list is empty
            ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
            ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
        />
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      backgroundColor: '#f5f5f5',
      paddingTop: StatusBar.currentHeight
    },
    scrollView:{
      paddingHorizontal: 16
    },
    card:{
      backgroundColor: "black",
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
    },
    cardText:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'
    },
    headerText:{
      fontSize:24,
      textAlign: 'center',
      marginBottom: 12
    },
    footerText:{
      fontSize:24,
      textAlign: 'center',
      marginTop: 12
    }
  });
  