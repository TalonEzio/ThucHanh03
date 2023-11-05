import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreenNavigationProps } from "./type"
import { HomeRoutes } from './routes'
import { DetailScreen, SearchScreen, WelcomeScreen } from '../../screens/home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeButtonNavigator } from './homeBottomNavigator'

const Stack = createNativeStackNavigator<HomeScreenNavigationProps>();
const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={HomeRoutes.Search}  >
            <Stack.Screen name={HomeRoutes.Welcome} component={WelcomeScreen}
                options={{ headerShown: false }}>
            </Stack.Screen>

            <Stack.Screen name={HomeRoutes.Search} component={SearchScreen}
                options={{ headerShown: false }}>
            </Stack.Screen>
            
            <Stack.Screen name={HomeRoutes.Detail} component={DetailScreen}
                options={{ headerShown: false }}>
            </Stack.Screen>

            {/* <Stack.Screen name={HomeRoutes.BottomTabs} component={HomeButtonNavigator}>
            </Stack.Screen> */}

        </Stack.Navigator>
    )
}
export { HomeNavigator }