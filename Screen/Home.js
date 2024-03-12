import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TextInput,
    FlatList,
    Button
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';


const Home = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([]);
    const data = [
        {
            id: 1,
            name: "Organic Banana",
            image: require("../assets/banana.jpg"),
            description: "12 Dozen",
            price: 4.99,
        },
        {
            id: 2,
            name: "Red Apple",
            image: require("../assets/apple.jpeg"),
            description: "1 Kg",
            price: 6.99,
        },
        {
            id: 3,
            name: "Orange",
            image: require("../assets/orange.jpg"),
            description: "12 Dozen",
            price: 4.99,
        },
    ];
    const data1 = [
        {
            id: 1,
            name: "Organic Banana",
            image: require("../assets/banana.jpg"),
            description: "12 Dozen",
            price: 4.99,
        },
        {
            id: 2,
            name: "Red Apple",
            image: require("../assets/apple.jpeg"),
            description: "1 Kg",
            price: 6.99,
        },
        {
            id: 3,
            name: "Orange",
            image: require("../assets/orange.jpg"),
            description: "12 Dozen",
            price: 4.99,
        },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.imagesub}>
            <Image style={styles.subimage} source={item.image} />
            <Text style={styles.subtext}>{item.name}</Text>
            <Text style={styles.subsubtext}>{item.description}</Text>
            <View style={styles.pricecontainer}>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity style={styles.pricebutton} onPress={() => handleAddToCart(item)}>
                <Icon name="add" size={25}></Icon>
            </TouchableOpacity>
        </View>
        </View >
    );
const renderItem1 = ({ item }) => (
    <View style={styles.imagesub}>
        <Image style={styles.subimage} source={item.image} />
        <Text style={styles.subtext}>{item.name}</Text>
        <Text style={styles.subsubtext}>{item.description}</Text>
        <View style={styles.pricecontainer}>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity style={styles.pricebutton} onPress={() => handleAddToCart(item)}>
                <Icon name="add" size={25}></Icon>
            </TouchableOpacity>
        </View>
    </View>
);
const handleAddToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    navigation.navigate("cart", { cartItems: updatedCartItems });
  };
  

return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
        <ScrollView>
            <View>
                <Image
                    style={styles.img}
                    source={require("../assets/carrot.png")}
                />
                <View style={styles.searchbox}>
                    <TextInput
                        style={styles.search}
                        placeholder="Search"
                    />
                    <View style={styles.searchIconbox}>
                        <Icon name="search" size={25} style={styles.searchIcon} />
                    </View>
                </View>
                <Swiper
                    style={styles.wrap}
                    autoplay={true}
                    autoplayTimeout={5}
                    activeDotColor="green"
                >
                    <View>
                        <Image
                            style={styles.imgbox}
                            source={require("../assets/banner1.jpg")}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.imgbox}
                            source={require("../assets/banner2.jpg")}
                        />
                    </View>

                </Swiper>
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ fontSize: responsiveFontSize(2.3), fontWeight: "bold", marginLeft: responsiveHeight(1) }}>
                        Exclusive Offer
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("vertical1", { products: data })
                        }}>
                        <Text style={{ fontSize: responsiveFontSize(1.5), color: "green", marginRight: responsiveHeight(1), marginTop: responsiveHeight(0.3), marginTop: responsiveHeight(2) }}>See more</Text>

                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: responsiveHeight(2) }}
                />
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ fontSize: responsiveFontSize(2.3), fontWeight: "bold", marginLeft: responsiveHeight(1), marginTop: responsiveHeight(2) }}>
                        Best Selling
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("vertical", { products: data1 })
                        }}>
                        <Text style={{ fontSize: responsiveFontSize(1.5), color: "green", marginRight: responsiveHeight(1), marginTop: responsiveHeight(0.3), marginTop: responsiveHeight(2) }}>See more</Text>

                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    data={data1}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem1}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: responsiveHeight(2) }}
                />

            </View>
        </ScrollView>
    </KeyboardAvoidingView>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subtext: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: "bold",
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveHeight(1),
    },
    pricecontainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: responsiveHeight(1),
        marginRight: responsiveHeight(1),
    },
    price: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: "bold",
        marginLeft: responsiveHeight(1)
    },
    pricebutton: {
        height: responsiveHeight(3),
        width: responsiveWidth(6),
        backgroundColor: "green",
        borderRadius: 5
    },
    subsubtext: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: "100",
        marginTop: responsiveHeight(0.5),
        marginLeft: responsiveHeight(0.6)

    },
    img: {
        height: responsiveHeight(5),
        width: responsiveWidth(10.8),
        alignSelf: "center",
        marginTop: responsiveHeight(2),
    },
    imgbox: {
        marginTop: responsiveHeight(2),
        width: responsiveWidth(90),
        height: responsiveHeight(20),
        alignContent: "center",
        marginLeft: 20
    },
    wrap: {
        height: responsiveHeight(27),
    },
    search: {
        backgroundColor: "white",
        flex: 1,
        height: responsiveHeight(5),
        alignSelf: "center",
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        paddingLeft: 20


    },
    searchbox: {
        flexDirection: "row",
        alignItems: "center", // Center items vertically
        height: responsiveHeight(5),
        width: responsiveWidth(90.5),
        marginTop: responsiveHeight(4),
        alignSelf: "center",
        borderColor: "black",
    },
    searchIcon: {
        marginTop: responsiveHeight(0.9)
    },
    searchIconbox: {
        backgroundColor: "white",
        height: responsiveHeight(5),
        width: responsiveWidth(9),
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30
    },
    imagesec: {
        marginTop: responsiveHeight(2),
        flexDirection: "row",
        height: responsiveHeight(27),
        width: responsiveWidth(100),
    },
    imagesub: {
        height: responsiveHeight(18),
        width: responsiveWidth(35),
        borderColor: "white",
        borderRadius: 30,
        borderStyle: "solid",
        borderWidth: 1,
        marginLeft: responsiveHeight(1),
        backgroundColor: "white"

    },
    subimage: {
        height: responsiveHeight(6),
        width: responsiveWidth(18),
        marginLeft: responsiveHeight(4),
        marginTop: responsiveHeight(1)
    }

});

export default Home;
