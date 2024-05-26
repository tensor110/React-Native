import { View, Text, TextInput, SafeAreaView, Button, StyleSheet, StatusBar, FlatList, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function ErrorHandling() {
    const [postList, setPostList] = useState([])
    const [postTitle, setPostTitle]= useState("")
    const [postBody, setPostBody]= useState("")
    const [isPosting, setIsPosting]= useState(false)
    const [error, setError] = useState("")

    const fetchData = async (limit = 10) =>{
        try{
        const response = await fetch(`https://jsonplaceholder.typicodde.com/posts?_limit=10`);
        const data = await response.json();
        setPostList(data);
        setError("")
        } catch (error){
            console.error("Error Fetching Data", error)
            setError("Failed to fetch post list")
        }
    }
    useEffect(() =>{
        fetchData();
    }, []);

    const addPost = async () =>{
        setIsPosting(true)
        try{
        const response = await fetch("https://jsonplaceholder.typicodde.com/posts",{
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
        setError("")
    } catch(error){
        console.error("Error Fetching Data", error)
        setError("Failed to add new post")
    }
    }

  return (
    <SafeAreaView style ={styles.container}>
        {
            error ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            ):(
                <ScrollView>
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
                </ScrollView>
            )
        }
        
        
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
    },
    errorContainer:{
        backgroundColor: '#FFC0CB',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16,
        alignItems: 'center'
    },
    errorText:{
        color: '#D8000C',
        fontSize: 16,
        textAlign: 'center'
    }
});