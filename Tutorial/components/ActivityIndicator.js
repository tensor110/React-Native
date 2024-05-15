import { View, ActivityIndicator } from "react-native";

export default function ActivityIndicators() {
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
      {/* <ActivityIndicator /> */}
      <ActivityIndicator size="large" color="black" animating={false}/>
    </View>
  );
}
