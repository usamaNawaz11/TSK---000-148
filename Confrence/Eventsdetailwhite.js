
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
import Event_detail from "../Component/Event_detail";

const Eventsdetalwhite = ({ navigation }) => {




    return (
        <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.upper_box}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.icon}>
                        <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"arrow-back"} size={30} color={"white"} />
                    </View>
                    <Text style={styles.events_heading}>EVENTSDETAIL</Text>
                </View>

                <View style={{ marginTop: responsiveHeight(1) }}>
                    <Text style={styles.text2}>Designing for the</Text>
                    <Text style={styles.text2}>Experience of artifical</Text>
                    <Text style={styles.text2}>Intelligence</Text>
                </View>
                <View style={styles.time_date_box_style}>
                    <View style={styles.time_icon}>
                        <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"time"} size={25} color={"white"} />
                    </View>
                    <Text style={styles.date_style}>22/01/2024 | 9:30AM-10:30 AMEST</Text>
                </View>
                <View style={styles.time_date_box_style}>
                    <View style={styles.time_icon}>
                        <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"exit"} size={25} color={"white"} />
                    </View>
                    <Text style={styles.date_style}>Room 23</Text>
                </View>
            </View>
            <Event_detail/>
            <View style={{flexDirection:"row",marginTop:10}}>
            <TouchableOpacity style={styles.sharebutton}>
                        <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"arrow-redo"} size={30} color={"black"} />
                        <Text style={styles.sharetext}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.draficon}>
                        <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"bookmark"} size={25} color={"black"} />
                    </TouchableOpacity>
                    </View>
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    sharebutton:{
        width:responsiveWidth(70),
        height:responsiveHeight(5),
        backgroundColor:"#F5F3FF",
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:25,
        marginLeft:15,
    },
    draficon:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:"#F5F3FF",
        marginLeft:20
    },
    sharetext:{
        fontSize:14,
        fontWeight:"700",
        marginLeft:10,
        marginTop:10
    },
    scrollViewContent: {
        paddingBottom: 20, // Adjust this value as needed
    },
    events_heading: {
        marginTop: responsiveHeight(8),
        color: "white",
        marginLeft: responsiveHeight(9),
        fontSize: 16,
        fontWeight: "700"
    },
    upper_box: {
        height: 398,
        width: 430,
        backgroundColor: "white",
    },
    icon: {
        marginTop: responsiveHeight(6),
        marginLeft: responsiveHeight(2),
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#27272A",
    },
    time_icon: {
        marginLeft: responsiveHeight(1),
        width: 46,
        height: 46,
        borderRadius: 25,
        backgroundColor: "#27272A",
    },
    img1: {
        width: 41,
        height: 40,
        marginTop: responsiveHeight(6),
        borderRadius: 25,
        marginRight: responsiveHeight(1),
    },

    text_1: {
        flexDirection: "row",
        marginTop: responsiveHeight(6),
        marginLeft: responsiveHeight(1),
    },
    text2: {
        fontFamily: "Plus Jakarta Sans",
        fontSize: 34,
        fontWeight: "600",
        color: "white",
        marginLeft: responsiveHeight(3),
    },
    featured_text: {
        marginTop: responsiveHeight(2),
        fontSize: 14,
        fontWeight: "700",
        fontFamily: "Plus Jakarta Sans",
        marginLeft: responsiveHeight(3),
    },

    headstyle: {
        fontSize: 25,
        fontWeight: "500",
    },
    time_date_box_style: {
        backgroundColor: "black",
        marginLeft: responsiveHeight(1),
        flexDirection: "row",
        marginTop: responsiveHeight(1.5),
    },
    date_style: {
        marginTop: responsiveHeight(1.5),
        marginRight: responsiveHeight(1),
        color: "white"
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

});

export default Eventsdetalwhite;
