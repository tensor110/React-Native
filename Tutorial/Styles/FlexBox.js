import { View, Text, StyleSheet } from "react-native";

export default function FlexBoxes({children, style}) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { flex: 1, backgroundColor: "plum", padding: 30 },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
