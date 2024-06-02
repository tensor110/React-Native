import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {theme} from '../theme';
import Search from '../assets/icons/search.js';
import Location from '../assets/icons/location.js';
import {debounce} from 'lodash'
import { fetchLocations, fetchWeatherForecast } from '../api/weather.js';
import * as Progress from 'react-native-progress'
import { getData, storeData } from '../utils/asyncStorage.js';

export default function Home() {
  const [showSearch, toggleSearch] = useState(true);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(true)

  const handleLocation = loc => {
    setLocations([]);
    toggleSearch(false)
    setLoading(true)
    fetchWeatherForecast({
      cityName: loc.name,
      days: '7'
    }).then(data=>{
      setWeather(data)
      setLoading(false)
      storeData('city', loc.name)
    })
  };
  const handleSearch = value =>{
    if(value.length>2){
        fetchLocations({cityName: value}).then(data =>{
            setLocations(data)
        })
    }
  }

  const fetchMyWeatherData = async () =>{
    let myCity = await getData('city');
    let cityName = "Lahore"
    if(myCity) cityName = myCity
    fetchWeatherForecast({
      cityName,
      days: '7'
    }).then(data=>{
      setWeather(data)
      setLoading(false)
    })
  }

  useEffect(()=>{
    fetchMyWeatherData();
  })

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), [])  

  const {current, location}= weather;
  return (
    <View className="flex-1 relative bg-black">
      {/* <StatusBar style = 'light'/> */}
      <Image
        blurRadius={20}
        source={require('../assets/bg.jpeg')}
        className="absolute h-full w-full"
      />
      {
        loading ?
        (
          <View className="flex-1 flex-row justify-center items-center">
            <Progress.CircleSnail thickness={10} size={40} color='#0bb3b2'/>
          </View>
        ):
        (
          <SafeAreaView className="flex flex-1">
          <View style={{height: '7%'}} className="mx-4 mt-4 relative z-50">
            <View
              className="flex-row justify-end items-center rounded-full"
              style={{
                backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent',
              }}>
              {showSearch ? (
                <TextInput
                  onChangeText={handleTextDebounce}
                  placeholder="Search City"
                  placeholderTextColor={'lightgray'}
                  className="pl-6 h-10 flex-1 text-base text-white"
                />
              ) : null}
              <TouchableOpacity
                onPress={() => toggleSearch(!showSearch)}
                style={{backgroundColor: theme.bgWhite(0.3)}}
                className="rounded-full p-2 m-1">
                <Search />
              </TouchableOpacity>
            </View>
            {locations.length > 0 && showSearch ? (
              <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                {locations.map((loc, index) => {
                  let showBorder = index + 1 != locations.length;
                  let borderClass = showBorder
                    ? 'border-b-2 border-b-gray-400'
                    : '';
                  return (
                    <TouchableOpacity
                      onPress={() => handleLocation(loc)}
                      key={index}
                      className={
                        'flex-row items-center justify-start px-4 py-2 mb-1 ' +
                        borderClass
                      }>
                      <View className="h-5 items-center mt-1">
                        <Location />
                      </View>
                      <Text className="text-black text-lg font-semibold">
                        {loc?.name} {loc?.country}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>
          <View className="mx-4 flex flex-1 justify-around mb-2">
            <Text className="text-white text-center text-2xl font-bold">
              {location?.name}, 
              <Text className="text-lg font-semibold text-gray-300">
                {" "+location?.country}
              </Text>
            </Text>
            <View className="flex-row justify-center">
              <Image
                source={{uri: 'https:' + current?.condition?.icon}}
                className="w-52 h-52"
              />
            </View>
            <View className="space-y-2">
              <Text className="text-center font-bold text-white text-6xl ml-5">
                {current?.temp_c}&#176;
              </Text>
              <Text className="text-center text-white text-xl tracking-widest">
                {current?.condition?.text}
              </Text>
            </View>
            <View className="flex-row justify-between mx-4">
              <View className="flex-row space-x-2 items-center">
                <Image
                  source={require('../assets/wind.png')}
                  className="w-8 h-8"
                />
                <Text className="text-white font-semibold text-base">{current?.wind_kph}km</Text>
              </View>
              <View className="flex-row space-x-2 items-center">
                <Image
                  source={require('../assets/drop.png')}
                  className="w-8 h-8"
                />
                <Text className="text-white font-semibold text-base">{current?.humidity}%</Text>
              </View>
              <View className="flex-row space-x-2 items-center">
                <Image
                  source={require('../assets/sun.png')}
                  className="w-6 h-6"
                />
                <Text className="text-white font-semibold text-base">
                  {weather?.forecast?.forecastday[0]?.astro?.sunrise}
                </Text>
              </View>
            </View>
            <View className="mb-2 space-y-3">
              <View className="flex-row items-center mx-5 space-x-2">
                <Image
                  source={require('../assets/calender.png')}
                  className="w-5 h-5"
                />
                <Text className="text-white text-base">Daily Forecast</Text>
              </View>
              <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal: 15}}
                showsHorizontalScrollIndicator={false}>
                  {
                    weather?.forecast?.forecastday?.map((item, index)=>{
                      let date = new Date(item.date);
                      let options = {weekday: 'long'}
                      let dayName = date.toLocaleDateString('en-US', options)
                      dayName= dayName.split(",")[0]
                      return(
                        <View
                  className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                  style={{backgroundColor: theme.bgWhite(0.25)}}
                  key={index}>
                  <Image
                    source={{uri: "https:" + item?.day?.condition?.icon}}
                    className="w-10 h-10"
                  />
                  <Text className="text-white">{dayName}</Text>
                  <Text className="text-white text-xl font-semibold">
                    {item?.day?.avgtemp_c}&#176;
                  </Text>
                </View>
                      )
                    })
                  }
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
        )
      }

    </View>
  );
}
