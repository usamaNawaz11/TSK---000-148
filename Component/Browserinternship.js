import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../Reduxtoolkit/Courseslice";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const Browseinternship=()=>{
    
const intern = [
    {
        key: "1",
        image: require("../assets/data.jpg"),
        title: "Data Analyst",
        location: "Remote",
        duration:"1 Month"
    },
    {
        key: "2",
        image: require("../assets/cyber.jpg"),
        title: "Cyber Security",
        location: "Remote",
        duration:"1 Month"
    },
    {
        key: "3",
        image: require("../assets/cloud.jpg"),
        title: "Cloud computing",
        location: "Remote",
        duration:"1 Month"
    },
    {
        key: "4",
        image: require("../assets/html.jpg"),
        title: "Frontend Development",
        location: "Remote",
        duration:"1 Month"
    },
    {
        key: "5",
        image: require("../assets/back.jpg"),
        title: "Backend Development",
        location: "Remote",
        duration:"1 Month"
    },
    {
        key: "6",
        image: require("../assets/chat.jpg"),
        title: "Chatbot Development",
        location: "Remote",
        duration:"1 Month"
    },
    {
        key: "7",
        image: require("../assets/ml.jpg"),
        title: "Machine Learning",
        location: "Remote",
        duration:"1 Month"
    },
    {
        key: "8",
        image: require("../assets/mobile.jpg"),
        title: "Mobile Application development",
        location: "Remote",
        duration:"1 Month"
    },
    {
        key: "9",
        image: require("../assets/gd.jpg"),
        title: "Graphic Designing",
        location: "Remote",
        duration:"1 Month"
    },
    {
        key: "10",
        image: require("../assets/video.jpg"),
        title: "Video Animation",
        location: "Remote",
        duration:"1 Month"
    },
    {
        key: "11",
        image: require("../assets/social.jpg"),
        title: "Social Media Marketing",
        location: "Remote",
        duration:"1 Month"
    },

]

const dispatch = useDispatch();
const add=useSelector(state=>state);
console.log(add)
const internshipItem = ({ item }) => {
    const handleAddCourse = () => {
        dispatch(addCourse(item));
    };

    return (
        <View style={styles.internShip}>
            <Image source={item.image} style={styles.internshipBox} />
            <View style={{ marginLeft: responsiveHeight(2), marginTop: responsiveHeight(2) }}>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}>{item.title}</Text>
                <View style={{ flexDirection: "row", marginTop: responsiveHeight(2) }}>
                    <Ionicons name="location" size={25} color="green" />
                    <Text style={{ marginTop: responsiveHeight(0.6), fontWeight: "200", marginLeft: responsiveHeight(1) }}>{item.location}</Text>
                    <Ionicons style={{ marginLeft: responsiveHeight(3) }} name="timer" size={25} color="green" />
                    <Text style={{ marginTop: responsiveHeight(0.6), fontWeight: "200", marginLeft: responsiveHeight(1) }}>{item.duration}</Text>
                </View>
                <View style={styles.lineView} />
                <TouchableOpacity onPress={handleAddCourse} style={styles.applyNow}>
                    <Text style={{ color: "white" }}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
    return(
        <View style={styles.container}>
            <FlatList
            data={intern}
            renderItem={internshipItem}
            keyExtractor={item => item.key}
        />

        </View>


    )

}
const styles= StyleSheet.create({
    container:{
        flex:1
    },
    internShip: {
        width: responsiveWidth(90),
        height: responsiveHeight(50),
        backgroundColor: "white",
        borderWidth: 0.5,
        borderRadius: 25,
        marginTop: responsiveHeight(4),
        marginLeft: responsiveHeight(2.5),

    },
    internshipBox: {
        width: responsiveWidth(90),
        height: responsiveHeight(25),
        backgroundColor: "white",


    },
    lineView:{
        width:responsiveWidth(80),
        borderBottomWidth:1,
        opacity:0.3,
        marginTop:responsiveHeight(3)
    },
    applyNow:{
        width:responsiveWidth(28),
        height:responsiveHeight(4.5),
        backgroundColor:"#8A2BE2",
        marginTop:responsiveHeight(4),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:25,
        alignSelf:"flex-end",
        marginRight:responsiveHeight(2)

    },



})
export default Browseinternship;