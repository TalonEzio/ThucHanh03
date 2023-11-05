import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeRoutes } from "./routes";

type DetailNavigateParams = {
    id: number
}
export type HomeStackParamList = {
    Welcome: undefined;
    Search: undefined;
    Detail: DetailNavigateParams;
    HomeButtonNavigator: undefined
};
type ProfileScreenRouteProps = RouteProp<HomeStackParamList, HomeRoutes.Detail>

type HomeScreenNavigationProps = NativeStackScreenProps<
    HomeStackParamList,
    WelcomeScreen,
    SearchScreen,
    DetailScreen,
    HomeButtonNavigator,
>

export { HomeScreenNavigationProps, HomeStackParamList, ProfileScreenRouteProps };