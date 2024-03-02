import { View, Text, StyleSheet } from "react-native";

export default function MultipleStyles() {
  return (
    <View style={styles.container}>
      <View style={[styles.lightblueBg, styles.box]}>
        <Text style={styles.title}>Light Blue Box</Text>
      </View>
      <View style={[styles.lightgreenBg, styles.box]}>
        <Text style={styles.title}>Light Green Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 30 },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
});
