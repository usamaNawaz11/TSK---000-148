
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

const Event_detail = ({ navigation }) => {




    return (
        <View style={styles.container}>
           
            <Text style={styles.featured_text}>FEATURED SPEAKER</Text>
            <View style={styles.feat_section}>
                <Image
                style={styles.feat_image}
                source={require("../assets/feat1.svg")}
                />
                <Text style={styles.featured_name}>Richard Cooper</Text>
                <View style={{flexDirection:"column"}}>
                    <Text style={styles.featured_company}>The Boring company</Text>
                </View>
            </View>
            <View style={styles.feat_description}>
            <Text style={{fontSize:14,fontWeight:"700"}}>DESCRIPTION</Text>
            <Text style={{fontSize:16,fontWeight:"400",marginTop:responsiveHeight(2),marginRight:responsiveHeight(2)}}>
            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum d...Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum d...Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum d...Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum d...
            </Text>
            <View style={[styles.feat_section,{marginLeft:responsiveHeight(-0.3)}]}>
                <Image
                style={styles.feat_image}
                source={require("../assets/host2.svg")}
                />
                <Text style={styles.featured_name}>Benjamin Jones</Text>
                <View style={{flexDirection:"column"}}>
                    <Text style={styles.featured_company}>The Boring company</Text>
                </View>
            </View>
            <View style={[styles.feat_description,{marginLeft:responsiveHeight(-0.3)}]}>
            <Text style={{fontSize:14,fontWeight:"700"}}>DESCRIPTION</Text>
            <Text style={{fontSize:16,fontWeight:"400",marginTop:responsiveHeight(2),marginRight:responsiveHeight(2)}}>
            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum d...Lorem ipsum dolor sit amet
            </Text>
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
    feat_description:{
        marginTop:responsiveHeight(2),
        marginLeft:responsiveHeight(3)
    },
    feat_section:{
        flexDirection:"row",
        marginLeft:responsiveHeight(3),
        marginTop:responsiveHeight(1)
    },
    featured_company: {
        marginTop: responsiveHeight(5),
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Plus Jakarta Sans",
        marginLeft: responsiveHeight(-12.5),
    },
    featured_text: {
        marginTop: responsiveHeight(2),
        fontSize: 14,
        fontWeight: "700",
        fontFamily: "Plus Jakarta Sans",
        marginLeft: responsiveHeight(3),
    },
    featured_name: {
        marginTop: responsiveHeight(2),
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Plus Jakarta Sans",
        marginLeft: responsiveHeight(2),
    },
    feat_image:{
        width:96,
        height:96,
        borderRadius:10,
        
    }
});

export default Event_detail;
