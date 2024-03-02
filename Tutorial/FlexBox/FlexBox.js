import { View, Text, StyleSheet } from "react-native";

export default function FlexBoxes({children, style}) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { 
    backgroundColor: "plum", 
    padding: 30,
    width: 200,
    height: 200
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: 'white'
  },
});
