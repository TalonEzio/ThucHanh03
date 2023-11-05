import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import { arrowDownIcon, locationIcon, searchIcon, starIcon } from "../../assets/icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeRoutes, HomeScreenNavigationProps, HomeStackParamList } from "../../navigator/home";

class Menu {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
class Popular {
    public id: number;
    public name: string;
    public rating: number;
    public imageUrl: string;

    constructor(id: number, name: string, rating: number, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }
}
class Recommend {
    id: number;
    name: string;
    imageUrl: string;
    day: number;
    night: number;
    constructor(id: number, name: string, imageUrl: string, day: number, night: number) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.day = day;
        this.night = night;

    }
}
const menuTemp = ["Location", "Hotel", "Food", "Adventure"]
const menuList: Menu[] = menuTemp.map((value, index) => new Menu(index + 1, value))

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
const popularList = images.map((value, index) => {
    const rating = (Math.random() * 5).toPrecision(2);
    return new Popular(index + 1, placeNames[index], Number.parseFloat(rating), value)
})

const recommendList: Recommend[] = images.map((value, index) => {
    const day = Math.floor(Math.random() * 7) + 1
    const night = Math.floor(Math.random() * 7) + 1
    return new Recommend(index, placeNames[index], value, day, night)
});

const SearchScreen = () => {
    const navigator = useNavigation<HomeScreenNavigationProps>();

    const [selectedMenu, setSelectedMenu] = useState(1);
    const event = {

        renderMenu(menu: Menu) {
            return (
                <TouchableOpacity style={styles.menuItem}
                    onPress={() => {
                        setSelectedMenu(menu.id)
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: menu.id === selectedMenu ? '#196eee' : '#b8b8b8',
                        fontWeight: menu.id === selectedMenu ? '500' : '400',
                        fontSize: 16
                    }}>
                        {menu.name}
                    </Text>
                </TouchableOpacity>
            )
        },
        renderPopular(popular: Popular) {
            return (
                <View style={
                    {
                        width: 188,
                        height: 240,
                        position: 'relative',
                        marginHorizontal: 5

                    }
                }>
                    <TouchableOpacity onPress={() => {
                        navigator.navigate(HomeRoutes.Detail, {
                            id: popular.id
                        });
                    }}>
                        <View style={{
                            position: 'absolute',
                            left: 10,
                            bottom: 60,
                            zIndex: 2,
                            minWidth: 120
                        }}>
                            <Text style={
                                {
                                    backgroundColor: '#4d5652',
                                    color: 'white',
                                    paddingHorizontal: 20,
                                    paddingVertical: 5,
                                    marginBottom: 10,
                                    borderRadius: 20,
                                    fontSize: 16
                                }
                            } >
                                {popular.name}
                            </Text>

                        </View>
                        <View style={{
                            backgroundColor: '#4d5652',
                            borderRadius: 20,
                            paddingVertical: 3,
                            flexDirection: 'row',
                            position: 'absolute',
                            left: 10,
                            bottom: 30,
                            zIndex: 2,
                            paddingRight: 30,
                            paddingLeft: 5,
                            alignItems: 'stretch',

                        }}>
                            <Image source={starIcon} />
                            <Text style={
                                {
                                    color: 'white',
                                    fontSize: 14,
                                    paddingTop: 1,
                                    paddingLeft: 5
                                }
                            } >
                                {popular.rating}
                            </Text>
                        </View>

                        <Image source={{
                            uri: popular.imageUrl
                        }} style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 30

                        }} />
                    </TouchableOpacity>
                </View>
            )
        },
        renderRecommend(recommend: Recommend) {
            return (
                <TouchableOpacity style={
                    {
                        paddingRight: 10
                    }
                }>
                    <View style={
                        {
                            width: 160,
                            height: 120,
                            position: 'relative',
                            marginBottom: 5
                        }}
                    >
                        <Image
                            source={{ uri: recommend.imageUrl }}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 15,

                            }}
                        />
                        <Text style={
                            {

                                position: 'absolute',
                                right: 20,
                                bottom: 0,
                                color: 'white',
                                transform: [{ translateY: 12 }],
                                borderRadius: 20,
                                backgroundColor: '#395452',
                                padding: 3,
                                fontWeight: '600',
                                paddingHorizontal: 10
                            }
                        }>{recommend.day}D/{recommend.night}N </Text>
                    </View>
                    <View>
                        <Text style={{
                            color: 'black',
                            fontSize: 15,
                            paddingTop: 10,
                            paddingLeft:10
                        }}>{recommend.name}</Text>

                    </View>
                </TouchableOpacity>
            )
        }
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={{ fontSize: 16, color: 'black' }}>
                        Explore
                    </Text>
                    <Text style={{ fontSize: 32, fontWeight: '500', color: 'black' }}>
                        Aspen
                    </Text>
                </View>
                <View style={styles.headerRight}>
                    <Image source={locationIcon} />

                    <Text style={{ color: 'black', fontSize: 16 }}>Aspen, USA</Text>
                    <Image source={arrowDownIcon} />
                </View>
            </View>

            <View style={styles.search}>
                <Image source={searchIcon} style={styles.searchIcon} />
                <TextInput style={styles.searchInput} placeholder="Find thing to do"></TextInput>
            </View>
            <View style={styles.menu}>
                <FlatList data={menuList}
                    renderItem={(x) =>
                        event.renderMenu(x.item)
                    }
                    horizontal={true}
                    scrollToOverflowEnabled={false}

                >
                </FlatList>
            </View>

            <ScrollView style={styles.container}>
                <View style={styles.containerPopular}>
                    <Text style={{
                        fontSize: 24,
                        marginBottom: 10,
                        color: 'black'
                    }}>
                        Location
                    </Text>

                    <FlatList data={popularList}
                        renderItem={({ item }) =>
                            event.renderPopular(item)
                        }
                        horizontal={true}
                        scrollToOverflowEnabled={false}
                    >
                    </FlatList>

                </View>

                <View style={styles.containerRecommend}>
                    <Text style={{
                        fontSize: 24,
                        marginBottom: 10,
                        // marginLeft: 20,
                        color: 'black'
                    }}>
                        Recommend
                    </Text>

                    <FlatList data={recommendList}
                        renderItem={({ item }) =>
                            event.renderRecommend(item)
                        }
                        horizontal={true}
                        scrollToOverflowEnabled={false}
                    >
                    </FlatList>

                </View>

            </ScrollView>
            <View style={styles.footer}></View>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        containerPopular:
        {
            marginTop: 10,
            // marginLeft: -5
        },
        containerRecommend:
        {
            marginTop: 10,
            // marginLeft: -5
        },
        wrapper:
        {
            padding: 12,
            flex: 1,
            position: 'relative',
            backgroundColor: 'white'
        },
        header:
        {
            flexDirection: 'row',
        },
        headerLeft:
        {
            flex: 8,
            // backgroundColor:'blue'
        },
        headerRight:
        {
            // backgroundColor: 'red',
            flex: 4,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly'

        },
        search:
        {
            position: 'relative',
            backgroundColor: '#f3f8fe',
            borderRadius: 20,
            paddingHorizontal: 20,
            // paddingVertical: 10
        },
        searchInput:
        {

            paddingHorizontal: 20,
        },
        searchIcon:
        {
            position: 'absolute',
            zIndex: 2,
            top: 12,
            left: 10
        },
        menu:
        {
            marginTop: 20
        },
        menuItem:
        {
            margin: 5,
            padding: 7,
            paddingHorizontal: 12,
            backgroundColor: '#f3ecec',
            borderRadius: 20,
        },
        container:
        {
            // padding:20
            margin: 0,
            width: '100%'
        },
        footer:
        {
            
        }
    }

)
export { SearchScreen }