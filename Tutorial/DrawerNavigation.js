import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DashboardScreen from "./Navigation/DrawerNav/Dashboard"
import SettingScreen from "./Navigation/DrawerNav/Setting"

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Dashboard' component={DashboardScreen} options={{
            title: "My dashboard",
            drawerLabel: "Dashboard label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }} />
            <Drawer.Screen name='Setting' component={SettingScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}