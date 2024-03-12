
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
import Search from "../Component/Search";

const Network = ({navigation}) => {
    const [recommended, setRecommended] = useState([
        {
            id: "1",
            Image: require("../assets/recom.svg"),
            name: "Oliver Miller",
            company: "The boring company"
        },
        {
            id: "2",
            Image: require("../assets/recom2.svg"),
            name: "James Brown",
            company: "The boring company"
        },
        {
            id: "3",
            Image: require("../assets/recom3.svg"),
            name: "James Bond",
            company: "The boring company"
        },
    ]);
    const [interest, setInterest] = useState([
        {
            id: "1",
            Image: require("../assets/host.svg"),
            name: "Mason Davis",
            company: "The boring company"
        },
        {
            id: "2",
            Image: require("../assets/host2.svg"),
            name: "Benjamin Jones",
            company: "The boring company"
        },
        {
            id: "3",
            Image: require("../assets/host3.svg"),
            name: "Harper Moore",
            company: "The boring company"
        },
    ]);
    const [host, setHost] = useState([
        {
            id: "1",
            Image: require("../assets/speaker1.svg"),
            name: "Ontonio",
            company: "The boring company"
        },
        {
            id: "2",
            Image: require("../assets/sp2.svg"),
            name: "Jhon William",
            company: "The boring company"
        },
        {
            id: "3",
            Image: require("../assets/sp3.svg"),
            name: "Henry Roads",
            company: "The boring company"
        },
    ]);


    const recommended_people = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('edit')}>
                    <Image style={styles.allimage} source={item.Image} />
                    <View style={{ justifyContent: "center" }}>
                        <Text style={styles.all_name_style}>{item.name}</Text>
                        <Text style={styles.all_company_style}>{item.company}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('messagedetail')} style={styles.message_button}>
                            <Text style={styles.button_text}>Message</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    const same_interest = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('edit')}>
                    <Image style={styles.allimage} source={item.Image} />
                    <View style={{ justifyContent: "center" }}>
                        <Text style={styles.all_name_style}>{item.name}</Text>
                        <Text style={styles.all_company_style}>{item.company}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('messagedetail')} style={styles.message_button}>
                            <Text style={styles.button_text}>Message</Text>
                        </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    };
    const hostandspeaker = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('edit')}>
                    <Image style={styles.allimage} source={item.Image} />
                    <View style={{ justifyContent: "center" }}>
                        <Text style={styles.all_name_style}>{item.name}</Text>
                        <Text style={styles.all_company_style}>{item.company}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('messagedetail')} style={styles.message_button}>
                            <Text style={styles.button_text}>Message</Text>
                        </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.main_containner}>
                <TouchableOpacity onPress={() => navigation.navigate("search")}>
            <Search></Search>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.allview}>
                        <Text style={styles.alltext}>RECOMMENDED PEOPLE</Text>
                        <Text style={styles.viewmoretext}>View all</Text>
                    </View>
                    <FlatList
                        data={recommended}
                        renderItem={recommended_people}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                    <View style={styles.allview}>
                        <Text style={styles.alltext}>PEOPLEWITHSAMEINTERESTS</Text>
                        <Text style={styles.viewmoretext}>View all</Text>
                    </View>
                    <FlatList
                        data={interest}
                        renderItem={same_interest}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                    <View style={styles.allview}>
                        <Text style={styles.alltext}>HOSTANDSPEAKER</Text>
                        <Text style={styles.viewmoretext}>View all</Text>
                    </View>
                    <FlatList
                        data={host}
                        renderItem={hostandspeaker}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                </ScrollView>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    main_containner:{
        marginTop:responsiveHeight(8),
        flex:1
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
    allview: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:responsiveHeight(3)
    },
    alltext: {
        fontSize: 16,
        fontWeight: "700",
        marginLeft: responsiveHeight(2)
    },
    viewmoretext: {
        marginRight: responsiveHeight(2),
        fontWeight: "400",
        fontSize: 16
    },
    allimage: {
        width: 166,
        height: 166,
        borderRadius: 10
    },
    all_name_style: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
        marginTop: 10
    },
    all_company_style: {
        textAlign: "center",
        fontWeight: "400",
        fontSize: 14,
        marginTop: 5,
        color: "#52525B"
    },
    message_button:{
        width:133,
        height:34,
        borderRadius:25.5,
        borderWidth:1,
        marginTop:responsiveHeight(1.5),
        justifyContent:"center",
        alignSelf:"center"
    },
    button_text:{
        fontSize:14,
        fontWeight:"600",
        textAlign:"center",
    }
});

export default Network;
