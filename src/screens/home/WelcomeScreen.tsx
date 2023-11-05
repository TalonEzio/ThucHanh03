import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { WelcomeBg, WelcomeDescription, WelcomeHeader } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { HomeRoutes, HomeScreenNavigationProps } from "../../navigator/home";

const WelcomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProps>();
    return (
        <View style={styles.container}>
            {/* không có font, fake ảnh */}
            <Image source={WelcomeBg} style={styles.background} />
            <Image source={WelcomeHeader} style={styles.header} />
            <Image source={WelcomeDescription} style={styles.description} />
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate(HomeRoutes.Search)
            }}>
                <Text style={styles.buttonText}>
                    Explore
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        position: 'relative'
    },
    header:
    {
        position: 'absolute',
        top: 20,
        left: '50%',
        width: '50%',
        resizeMode: 'contain',
        transform: [{ translateX: -100 }]
    },
    description:
    {
        position: 'absolute',
        bottom: 100,
        left:20
    },
    background:
    {
        flex:1,
        resizeMode: 'stretch'
    },
    button:
    {
        backgroundColor: '#186eee',

        position: 'absolute',
        bottom: 20,
        left: '50%',
        width: '60%',
        paddingVertical: 10,
        transform: [{ translateX: -120 }],
        borderRadius: 15,
    },
    buttonText:
    {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    }
});
export { WelcomeScreen }