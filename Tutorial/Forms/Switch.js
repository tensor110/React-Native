import {
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";

export default function Switche() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <View style={styles.switchContainer}>
        <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{ false: '#767577', true: 'lightblue'}}
          thumbColor='#f4f3f4'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
});
