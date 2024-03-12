import React from 'react';
import { useState } from "react";
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

const Explore = () => {
    const data = [
        {
            id: 1,
            name: "Fresh Fruit and vegetable",
            image: require("../assets/vv.jpg"),
            
        },
        {
            id: 2,
            name: "Cooking oil and ghee",
            image: require("../assets/ghee.jpg"),
            
        },
        {
            id: 3,
            name: "Meat and Fish",
            image: require("../assets/fish.jpg"),
            
        },
        {
            id: 3,
            name: "Bakery and Snacks",
            image: require("../assets/bak.jpg"),
            
        },
    ];


    const renderItem = ({ item }) => (
        <TouchableOpacity style={{marginLeft:responsiveHeight(3.5)}}>
        <View style={styles.verticalItem}>
        <View style={styles.itemContainer}>
        <View style={styles.imagesub}>
            <Image style={styles.subimage} source={item.image} />
            <Text style={styles.subtext}>{item.name}</Text>
            
        </View>
        </View>
        </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.title_text}>
                    Find Product
                </Text>
            </View>
            <View style={styles.searchbox}>
                <TextInput
                    style={styles.search}
                    placeholder="Search"
                />
                <View style={styles.searchIconbox}>
                    <Icon name="search" size={25} style={styles.searchIcon} />
                </View>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: responsiveHeight(2) }}
                numColumns={2}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    Container: {
        flex: 1
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
    verticalItem: {
        flex: 1,
        margin: responsiveWidth(0.5),
      },
      itemContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop:responsiveHeight(1.5)
      },
    searchbox: {
        flexDirection: "row",
        alignItems: "center", // Center items vertically
        height: responsiveHeight(5),
        width: responsiveWidth(90.5),
        marginTop: responsiveHeight(3),
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
    title_text: {
        textAlign: "center",
        fontSize: responsiveFontSize(2.5),
        fontWeight: "bold",
        marginTop: responsiveHeight(2)
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
    },
    subtext: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: "bold",
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveHeight(0),
        textAlign:"center"
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
})

export default Explore;