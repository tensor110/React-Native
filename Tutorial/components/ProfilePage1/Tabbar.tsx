import React from "react";
import {
  View,
  Image,
  StyleSheet,
} from "react-native";

const home = require("../../../assets/profile_page1/home.jpg");
const search = require("../../../assets/profile_page1/search.jpg");
const add = require("../../../assets/profile_page1/add.jpg");
const video = require("../../../assets/profile_page1/video.jpg");
const profile = require("../../../assets/profile_page1/profile-photo.jpg");

const Tabbar: React.FC = () => {
  return (
      <View style={styles.scrollViewContent}>
        <Image source={home} style={styles.icon1} resizeMode="contain" />
        <Image source={search} style={styles.icon2} resizeMode="contain" />
        <Image source={add} style={styles.iconmid} resizeMode="contain" />
        <Image source={video} style={styles.icon2} resizeMode="contain" />
        <Image source={profile} style={styles.icon1} resizeMode="contain" />

      </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    display: "flex",
    flexDirection: 'row',
    width: "70%",
    paddingVertical: "3%",
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: "space-evenly",
    position: 'absolute',
    bottom: 30
  },
  icon1:{
      width: 40,
      height: 40,
      borderRadius: 50
    },
    icon2:{
      width: 35,
      height: 35,
    }, 
    iconmid:{
      width: 30,
      height: 30,
    }, 
});

export default Tabbar;
