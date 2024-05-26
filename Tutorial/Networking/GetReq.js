import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function GetReq() {
    const [postList, setPostList] = useState([])
    const fetchData = async (limit = 10) =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
        const data = await response.json();
        setPostList(data);
    }
    useEffect(() =>{
        fetchData();
    }, []);

  return (
    <SafeAreaView style={StyleSheet.container}>
      <View style={styles.listContainer}>
      <FlatList
              data={postList}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.nameText}>{item.title}</Text>
                  <Text style={styles.typeText}>{item.body}</Text>
                </View>
              )}
              scrollEnabled={true}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              ListEmptyComponent={<Text>No Posts Found</Text>}
              ListHeaderComponent={
                <Text style={styles.headerText}>Post List</Text>
              }
              ListFooterComponent={
                <Text style={styles.footerText}>End of list</Text>
              }
              />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight  
    },
    listContainer:{
        display:'flex',
        paddingHorizontal: 16
    },
    card: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
      },
      nameText: {
        fontSize: 30,
      },
      typeText: {
        fontSize: 24,
        color: "#666666",
      },
      headerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12,
      },
      footerText: {
        fontSize: 24,
        textAlign: "center",
        marginTop: 12,
      },
})