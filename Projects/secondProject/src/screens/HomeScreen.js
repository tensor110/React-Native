import {View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Image} from 'react-native';
import {theme} from '../theme';

export default function HomeScreen() {
  return (
    <View className="flex-1 relative bg-black">
      {/* <StatusBar style = 'light'/> */}
      <Image
        blurRadius={20}
        source={require('../assets/bg.jpeg')}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        <View style={{height: '7%'}} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{backgroundColor: theme.bgWhite(0.2)}}>
            <TextInput
              placeholder="Search City"
              placeholderTextColor={'lightgray'}
              className="pl-6 h-10 flex-1 text-base text-white"
            />
            <TouchableOpacity
                style={{backgroundColor: theme.bgWhite(0.3)}}
                className="rounded-full p-3 m-1"
            >
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
