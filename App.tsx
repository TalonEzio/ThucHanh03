import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "./src/navigator"
import { NavigationContainer } from "@react-navigation/native"
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  )
}
export { App }