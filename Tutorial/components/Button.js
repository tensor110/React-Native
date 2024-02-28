import { View, Button } from "react-native";

export default function Buttons() {
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
        onPress={() => console.log("Button Pressed")}
        color="red"
        // disabled
      />
    </View>
  );
}
