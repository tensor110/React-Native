import { useState } from "react";
import { View, Button, 
Modal, Text } from "react-native";

export default function Buttons() {
    const [isModalVisible, setIsModalVisible] = useState(false)
  return (
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
        color="red"
        onPress = {() => setIsModalVisible(true)}
      />
      <Modal
        visible= {isModalVisible}
        onRequestClose = {()=> setIsModalVisible(false)}
        animationType = 'fade'   //slide and fade
        presentationStyle="fullScreen"
      >
        <View>
            <Text>Modal Content</Text>
            <Button
                title="Close"
                color= 'midnightblue'
                onPress={()=> setIsModalVisible(false)}
            />
        </View>
      </Modal>
    </View>
  );
}
 