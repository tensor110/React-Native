import React from "react";

import Tabbar from "../components/ProfilePage1/Tabbar";
import {
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfilePage: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Tabbar/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },
  scrollViewContent: {
    display: "flex",
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: "3%",
    justifyContent: "space-between",
  },
});

export default ProfilePage;
