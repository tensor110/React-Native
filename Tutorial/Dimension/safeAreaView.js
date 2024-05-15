import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Views() {
  return (
    <SafeAreaView style={styles.styleContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>Welcome!!!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  styleContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 30,
  },
  box: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
