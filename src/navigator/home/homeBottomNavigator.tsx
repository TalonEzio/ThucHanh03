import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DetailScreen, SearchScreen } from "../../screens/home";
import { HomeRoutes } from "./routes";
const Tab = createBottomTabNavigator();


const HomeButtonNavigator = () =>
{
    return (
        <Tab.Navigator screenOptions={{
        }}>
            <Tab.Screen name={HomeRoutes.Search} component={SearchScreen} />
            <Tab.Screen name={HomeRoutes.Detail} component={DetailScreen} />
        </Tab.Navigator>
    )
}
export{HomeButtonNavigator}