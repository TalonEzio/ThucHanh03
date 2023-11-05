import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { HomeScreenNavigationProps, ProfileScreenRouteProps } from "../../navigator/home/type"
import { arrowDownIcon, arrowRightIcon, arrowUpIcon, backIcon, bathTubIcon, foodIcon, frameIcon, heartIcon, searchIcon, starIcon, wifiIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { HomeRoutes } from '../../navigator/home';
import { useState } from 'react';

class Location {
    public id: number;
    public name: string;
    public imageUrl: string;
    public rating: number;
    public rateCount: number;
    public description: string;
    public price: number;

    constructor(id: number, name: string, imageUrl: string, rating: number, rateCount: number, description: string, price: number) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.rating = rating;
        this.rateCount = rateCount;
        this.description = description;
        this.price = price;
    }
}
const images = [
    "https://images.pexels.com/photos/1816823/pexels-photo-1816823.jpeg",
    "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
    "https://images.pexels.com/photos/2884590/pexels-photo-2884590.jpeg",
    "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg",
    "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg",
    "https://images.pexels.com/photos/18873633/pexels-photo-18873633/free-photo-of-buildings-by-river-in-dresden.jpeg"
]
const placeNames = [
    'Hạ Long Bay',
    'Kyoto, Japan',
    'Santorini, Greece',
    'Machu Picchu, Peru',
    'New York City, USA',
    'Paris, France',
];
const locationDetailList: Location[] = [];

for (let i = 1; i <= 6; i++) {
    const randomRating = Number.parseFloat((Math.random() * 5).toPrecision(2))
    const rateCount = Math.ceil((Math.random() * 500))
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const price = Math.ceil((Math.random() * 100))
    const fakeLocation = new Location(
        i,
        placeNames[i -1],
        images[i - 1],
        randomRating,
        rateCount,
        description,
        price
    );
    locationDetailList.push(fakeLocation);
}
const DetailScreen = ({ route }: { route: ProfileScreenRouteProps }) => {
    const [fullDesc, setFullDesc] = useState(false);
    const navigation = useNavigation<HomeScreenNavigationProps>();
    const id = route.params.id;
    const location = locationDetailList.find(x => x.id === id);
    if (!location) {
        return (<View><Text>Không thấy</Text></View>)
    }

    return (
        <View style={styles.wrapper}>
            <ScrollView style={styles.container}>
                <View style={styles.locationTop}>
                    <Image source={{
                        uri: location.imageUrl
                    }}
                        style={styles.locationTopImage}
                    />
                    <TouchableOpacity style={styles.locationTopBack}
                        onPress={() => {
                            navigation.navigate(HomeRoutes.Search)
                        }
                        }>
                        <Image source={backIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.locationTopHeart}>
                        <Image source={heartIcon} />
                    </TouchableOpacity>

                </View>
                <View style={styles.locationHeader}>
                    <View style={styles.locationHeaderLeft}>
                        <Text style={styles.locationHeaderTitle}>{location.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={starIcon} style={{ width: 15, aspectRatio: 1 }} />
                            <Text style={{ fontSize: 12, paddingLeft: 5 }}>{location.rating} ({location.rateCount} reviews)</Text>
                        </View>
                    </View>
                    <View style={styles.locationHeaderRight}>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: '500', color: 'blue', fontSize: 16 }}>Show map</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.locationDesc}>
                    <Text style={{ color: 'black', fontSize: 14 }}>{fullDesc ? location.description : location.description.substring(0, 150) + '...'}</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 5 }} onPress={() => {
                        setFullDesc(x => !x)
                    }}>
                        <Text style={{ color: '#79a7eb', fontWeight: '500' }}>{!fullDesc ? "Read more..." : "Collapse "}</Text>
                        <Image source={!fullDesc ? arrowDownIcon : arrowUpIcon}
                            style={{
                                aspectRatio: 1,
                                width: 16
                            }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.locationFacilities}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 24, color: 'black', paddingLeft: 20 }}>Facilities</Text>

                    </View>
                    <TouchableOpacity style={styles.locationFacilitiesButton}>
                        <Image source={wifiIcon} />
                        <Text >
                            1 Heater
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.locationFacilitiesButton}>
                        <Image source={foodIcon} />
                        <Text >
                            Dinner
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.locationFacilitiesButton}>
                        <Image source={bathTubIcon} />
                        <Text >
                            1 Tub
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.locationFacilitiesButton}>
                        <Image source={frameIcon} />
                        <Text >
                            Pool
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={{
                    width: '30%'
                }}>
                    <Text style={{ color: 'black' }}>Price</Text>
                    <Text style={{ color: '#2dd7a4', fontSize: 32, fontWeight: 'bold' }}>${location.price}</Text>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: '#196eef',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginLeft: 50,
                    paddingHorizontal: 20
                    // width: '70%'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            paddingHorizontal: 10,

                        }}>Book now</Text>
                        <Image source={arrowRightIcon} />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export { DetailScreen }
const styles = StyleSheet.create({
    wrapper:
    {
        flex: 1
    },
    footer:
    {
        paddingLeft: 20,
        marginBottom: 'auto',
        flexDirection: 'row',
        paddingBottom: 10
    },
    container: {
        flex: 1,
    },

    locationTop:
    {
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 25
    },
    locationTopImage:
    {
        width: '95%',
        aspectRatio: 1,
        borderRadius: 20
    },
    locationTopBack:
    {
        position: 'absolute',
        backgroundColor: 'white',
        top: 10,
        left: 20,
        padding: 10,
        borderRadius: 10
    },
    locationTopHeart:
    {
        position: 'absolute',
        backgroundColor: 'white',
        bottom: 0,
        right: 30,
        padding: 10,
        borderRadius: 1000,
        zIndex: 2
    },
    locationHeader:
    {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    locationHeaderTitle:
    {

        color: 'black',
        fontSize: 24,
        fontWeight: '500'
    },
    locationHeaderLeft: {
        flex: 9,
        paddingLeft: 10,

    },
    locationHeaderRight:
    {
        flex: 3,

    },
    locationDesc:
    {
        marginTop: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    locationFacilities:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 20
    }, locationFacilitiesButton:
    {
        alignItems: 'center',
        backgroundColor: '#edf2fb',
        padding: 10,
        borderRadius: 30,
        width: 80,
        marginHorizontal: 5

    }
})