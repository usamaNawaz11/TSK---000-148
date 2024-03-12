
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Button,
    ScrollView,
} from "react-native";
import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans/400.css"; // Specify weight
import "@fontsource/plus-jakarta-sans/400-italic.css"; // Specify weight and style
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";

const Event = ({navigation}) => {
    const [data, setData] = useState([
        {
            id: "1",
            heading: "Designing for the experience of intelligence",
            date: "22/1/2024",
            time: "9:30 AM - 10:30AMEST",
            Image: require("../assets/av2.svg"),
            name: "Phill Lepley",
            field: "Speaker",
            room: "Room 23",
        },
        {
            id: "2",
            heading: "Designing for the experience of intelligence",
            date: "22/1/2024",
            time: "9:30 AM - 10:30AMEST",
            Image: require("../assets/av3.svg"),
            name: "Jake Morisson",
            field: "Speaker",
            room: "Room 23",
        },
    ]);
    const [speaker, setSpeaker] = useState([
        {
            id: "1",
            Image: require("../assets/speaker1.svg"),
            name: "Noa Jhonson",
            company: "The boring company"
        },
        {
            id: "2",
            Image: require("../assets/speaker2.svg"),
            name: "Robert Mark",
            company: "The boring company"
        },
        {
            id: "3",
            Image: require("../assets/speaker3.svg"),
            name: "Peter Williams",
            company: "The boring company"
        },
    ]);
    const [sponser, setSponser] = useState([
        {
            id: "1",
            Image: require("../assets/sponser1.svg"),
            name: "Apple INC",
            company: "Gold member"
        },
        {
            id: "2",
            Image: require("../assets/sponser2.svg"),
            name: "Wallmart",
            company: "Silver member"
        },
        {
            id: "3",
            Image: require("../assets/sponser3.svg"),
            name: "Amazon",
            company: "Bronze member"
        },
    ]);


    const discover_events = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('detail')}>
                <View style={styles.datasty}>
                    <Text style={styles.headstyle}>{item.heading}</Text>
                    <View style={styles.time_date_box_style}>
                        <Ionicons
                            style={{ marginTop: responsiveHeight(1.5) }}
                            name="calendar"
                            size={20}
                        />
                        <Text style={styles.date_style}>{item.date}</Text>
                        <Ionicons
                            style={{ marginTop: responsiveHeight(1.5) }}
                            name="time"
                            size={20}
                        />
                        <Text style={styles.time_style}>{item.time}</Text>
                    </View>
                    <View style={styles.detail_section}>
                        <Image style={styles.dis_img} source={item.Image} />
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text style={styles.name_style}>{item.name}</Text>
                            <Text style={styles.field_style}>{item.field}</Text>
                        </View>
                        <View style={styles.room_style}>
                            <Ionicons name="exit" size={20} />
                            <Text>{item.room}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    const featured_speaker = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('edit')}>
                    <Image style={styles.featureimage} source={item.Image} />
                    <View style={{ justifyContent: "center" }}>
                        <Text style={styles.feature_name_style}>{item.name}</Text>
                        <Text style={styles.feature_company_style}>{item.company}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    const our_sponser = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('sponsor')}>
                <View style={{ margin: 10, flexDirection: "row" }}>

                    <Image style={styles.sponserimage} source={item.Image} />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.feature_name_style}>{item.name}</Text>
                        <Text style={styles.feature_company_style}>{item.company}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.upper_box}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.text_1}>
                        <Text style={styles.text_color1}>HELLO</Text>
                        <Text style={styles.text_color2}>AMANDA COOPER</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                    <Image
                        style={styles.img1}
                        source={require("../assets/avatar1.svg")}
                    />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: responsiveHeight(1) }}>
                    <Text style={styles.text2}>The Expo 2023</Text>
                    <Text style={styles.text2}>Dubai Confrence</Text>
                </View>
                <View style={styles.search_box}>
                    <Ionicons
                        style={styles.search_icon}
                        name={"search"}
                        size={20}
                        color={"#A1A1AA"}
                    />
                    <TextInput
                        placeholder="search"
                        style={styles.input_search}
                    ></TextInput>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Text style={styles.discoverText}>DISCOVER EVENTS</Text>
                    <FlatList
                        data={data}
                        renderItem={discover_events}
                        keyExtractor={(item) => item.id}
                    />
                    <TouchableOpacity style={styles.viewMoreButton}>
                        <Text style={styles.viewMoreButtonText}>View More</Text>
                    </TouchableOpacity>
                    <View style={styles.featureview}>
                        <Text style={styles.featuredspeakertext}>FEATURED SPEAKER</Text>
                        <Text style={styles.viewmoretext}>View all</Text>
                    </View>
                    <FlatList
                        data={speaker}
                        renderItem={featured_speaker}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                    <View style={styles.sponserview}>
                        <Text style={styles.sponsertext}>OUR SPONSER</Text>
                        <Text style={styles.viewalltext}>View all</Text>
                    </View>
                    <FlatList
                        data={sponser}
                        renderItem={our_sponser}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    upper_box: {
        height: 274,
        width: 430,
        backgroundColor: "black",
    },
    img1: {
        width: 41,
        height: 40,
        marginTop: responsiveHeight(6),
        borderRadius: 25,
        marginRight: responsiveHeight(1),
    },
    search_icon: {
        paddingLeft: responsiveHeight(1.3),
        paddingTop: responsiveHeight(1),
    },
    input_search: {


        paddingLeft: responsiveHeight(1),
        paddingTop: responsiveHeight(0.5),
    },
    search_box: {
        flexDirection: "row",
        width: 400,
        height: 40,
        backgroundColor: "white",
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveHeight(1),
        borderRadius: 20,
    },
    text_1: {
        flexDirection: "row",
        marginTop: responsiveHeight(6),
        marginLeft: responsiveHeight(1),
    },
    text_color1: {
        color: "#D4D4D8",
        fontFamily: "Plus Jakarta Sans",
        fontWeight: "600",
        fontSize: 16,
    },
    text_color2: {
        color: "white",
        fontFamily: "Plus Jakarta Sans",
        fontWeight: "400",
        fontSize: 16,
        marginLeft: responsiveHeight(0.5),
    },
    text2: {
        fontFamily: "Plus Jakarta Sans",
        fontSize: 34,
        fontWeight: "600",
        color: "white",
        marginLeft: responsiveHeight(1),
    },
    discoverText: {
        marginTop: responsiveHeight(2),
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "Plus Jakarta Sans",
        marginLeft: responsiveHeight(1),
    },
    datasty: {
        backgroundColor: "#F5F3FF",
        width: 400,
        height: 211,
        margin: responsiveHeight(2),
    },
    headstyle: {
        fontSize: 25,
        fontWeight: "500",
    },
    time_date_box_style: {
        backgroundColor: "white",
        width: 370,
        height: 41,
        borderRadius: 15,
        justifyContent: "center",
        marginLeft: responsiveHeight(1.5),
        flexDirection: "row",
        marginTop: responsiveHeight(1.5),
    },
    date_style: {
        marginTop: responsiveHeight(1.5),
        marginRight: responsiveHeight(1),
    },
    time_style: {
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveHeight(1),
    },
    dis_img: {
        width: 49,
        height: 49,
        borderRadius: 25,
    },
    detail_section: {
        flexDirection: "row",
        marginLeft: responsiveHeight(2),
        marginTop: responsiveHeight(2.5),
    },
    name_style: {
        fontSize: 17,
        fontWeight: "600",
    },
    field_style: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: "400",
    },
    room_style: {
        flexDirection: "row",
        marginLeft: responsiveHeight(10),
        marginTop: responsiveHeight(1.5),
    },
    scrollViewContent: {
        paddingBottom: 20, // Adjust this value as needed
    },
    viewMoreButton: {
        width: 124,
        height: 42,
        backgroundColor: "black",
        borderRadius: 20,
        alignSelf: "center",
        marginBottom: 20,
    },
    viewMoreButtonText: {
        fontSize: 14,
        fontWeight: "600",
        color: "white",
        textAlign: "center",
        marginTop: responsiveHeight(1),
    },
    featureview: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    featuredspeakertext: {
        fontSize: 16,
        fontWeight: "700",
        marginLeft: responsiveHeight(2)
    },
    viewmoretext: {
        marginRight: responsiveHeight(2),
        fontWeight: "400",
        fontSize: 16
    },
    featureimage: {
        width: 166,
        height: 166,
        borderRadius: 10
    },
    feature_name_style: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
        marginTop: 10
    },
    feature_company_style: {
        textAlign: "center",
        fontWeight: "400",
        fontSize: 14,
        marginTop: 5,
        color: "#52525B"
    },
    sponserview: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(2)
    },
    sponsertext: {
        fontSize: 16,
        fontWeight: "700",
        marginLeft: responsiveHeight(2),
    },
    viewalltext: {
        marginRight: responsiveHeight(2),
        fontWeight: "400",
        fontSize: 16
    },
    sponserimage: {
        height: 64,
        width: 64,
        borderRadius: 43
    },
    sponsername: {
        fontSize: 16,
        fontWeight: "500"
    },
    sponsermember: {
        fontWeight: "400",
        fontSize: 14,
        color: "#52525B"
    }
});

export default Event;
