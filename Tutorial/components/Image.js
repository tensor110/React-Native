import {View, Text, Image, ImageBackground} from 'react-native'
const logoImg = require("../assets/icon.png")

export default function Images(){
  return(
    <View style= {{flex: 1, backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        {/* <Image source={logoImg} style= {{height: 300, width: 300}}/> */}
        {/* <Image source={{uri: "https://picsum.photos/200"}} style= {{height: 300, width: 300}}/> */}
        <ImageBackground source={logoImg} style={{ flex:1, width: 400}}>
          <Text>Image Text</Text>
        </ImageBackground>
    </View>
  )
}