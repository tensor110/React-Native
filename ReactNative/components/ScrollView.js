import {View, Text, Image, ScrollView} from 'react-native'
const logoImg = require("../assets/icon.png")

export default function ScrollViews(){
  return(
    <View style= {{flex: 1, backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems:'center', padding: 60}}>
        <ScrollView>
        <Image source={logoImg} style={{width: 300, height:300}}/>
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci sed corporis accusantium quidem iure magnam deserunt? Doloremque quaerat quo cumque asperiores dolorem fugit culpa iure possimus error. Magnam, eum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, adipisci quis. Obcaecati odio totam qui repellat, suscipit porro, debitis placeat ducimus saepe fuga illum, enim corrupti impedit incidunt aperiam minus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illo molestias perferendis explicabo odio. Magnam incidunt, impedit aut molestias mollitia magni quod rem deserunt a repellat vero eligendi cum, autem minus corporis enim recusandae asperiores adipisci quia itaque ratione sequi ipsa. Sapiente alias architecto quis perspiciatis, dicta harum tempora amet.</Text>
      <Image source={logoImg} style={{width: 300, height:300}}/>
        </ScrollView>
    </View>
  )
}