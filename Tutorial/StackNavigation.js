import { NavigationContainer } from "@react-navigation/native";
import { Text, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Navigation/StackNav/HomeScreen";
import About from "./Navigation/StackNav/AboutScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <Pressable onPress={() => alert("Menu Buttob Pressed")}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),
          contentStyle:{
            backgroundColor: "#e8e4f3"
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome Home",
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          initialParams={{ name: "Guest" }}
          // options={({route}) =>({
          //   title: route.params.name,
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
