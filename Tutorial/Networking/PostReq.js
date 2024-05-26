import { View, Text, TextInput, SafeAreaView, Button, StyleSheet, StatusBar, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function PostReq() {
    const [postList, setPostList] = useState([])
    const [postTitle, setPostTitle]= useState("")
    const [postBody, setPostBody]= useState("")
    const [isPosting, setIsPosting]= useState(false)

    const fetchData = async (limit = 10) =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
        const data = await response.json();
        setPostList(data);
    }
    useEffect(() =>{
        fetchData();
    }, []);

    const addPost = async () =>{
        setIsPosting(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: 'post',
            headers: {
                "content-Type": 'application/json',
            },
            body: JSON.stringify({
                title: postTitle,
                body: postBody
            }),
        });
        const newPost = await response.json()
        setPostList([newPost, ...postList])
        setPostTitle("");
        setPostBody("");
        setIsPosting(false);
    }

  return (
    <SafeAreaView style ={styles.container}>
      <View style ={styles.inputContainer} >
        <TextInput style = {styles.input} placeholder='Post Title' value={postTitle} onChangeText={setPostTitle}/>
        <TextInput style = {styles.input} placeholder='Post Body' value={postBody} onChangeText={setPostBody}/>
        <Button title = {isPosting ? "Adding..." : "Add Post"} onPress= {addPost} disabled={isPosting} />
      </View>
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
        paddingTop: StatusBar.currentHeight,  
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
    inputContainer:{
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16
    },
    input:{
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 8,
        padding: 8,
        borderRadius: 8
    }
});