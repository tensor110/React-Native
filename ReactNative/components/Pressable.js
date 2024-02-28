import {View, Text, Image, ScrollView, Button, Pressable} from 'react-native'
const logoImg = require("../assets/icon.png")

export default function Pressables(){
  return(
    <View
    style={{
      flex: 1,
      backgroundColor: "blue",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Button
      title="press"
      onPress={() => console.log("Button Pressed")}
      color="red"
      // disabled
    />
    <Pressable onPress={()=> console.log("Image Pressed")}>
    <Image source={logoImg} style={{width: 300, height:300}}/>
    </Pressable>
    <Pressable onPress={()=> console.log("Text Pressed")}>
    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci sed corporis accusantium quidem iure magnam deserunt? Doloremque quaerat quo cumque asperiores dolorem fugit culpa iure possimus error. Magnam, eum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, adipisci quis. Obcaecati odio totam qui repellat, suscipit porro, debitis placeat ducimus saepe fuga illum, enim corrupti impedit incidunt aperiam minus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illo molestias perferendis explicabo odio. Magnam incidunt, impedit aut molestias mollitia magni quod rem deserunt a repellat vero eligendi cum, autem minus corporis enim recusandae asperiores adipisci quia itaque ratione sequi ipsa. Sapiente alias architecto quis perspiciatis, dicta harum tempora amet.</Text>
    </Pressable>
  </View>
  )
}