import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Course from "./Navigation/TabNav/Course";
import Profile from "./Navigation/TabNav/Profile";
import Setting from "./Navigation/DrawerNav/Setting";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./NestNavigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          tabBarActiveTintColor: "purple",
        }}
      >
        <Tab.Screen name="Course List" component={Course} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name={"person"} size={20} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="Settiing" component={Setting} />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
