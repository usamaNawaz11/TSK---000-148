import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Header from "../Component/Header";
import Browseinternship from "../Component/Browserinternship";
import Reviewfooter from "../Component/Reviewfooter";
const InternList = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(3), marginLeft: responsiveHeight(2) }}>
                <Image style={styles.logoimage} source={require("../assets/interneelogo.jpeg")} />
                <View style={{ flexDirection: "row", marginLeft: responsiveHeight(1) }}>
                    <Text style={styles.greenname}>Internee</Text>
                    <Text style={styles.blackname}>.Pk</Text>
                </View>
            </View>
            <View style={{ flexDirection: "column", marginLeft: responsiveHeight(7.8), marginTop: responsiveHeight(-2) }}>
                <Text style={styles.purplename}>VIRTUAL INTERNSHIP PLATFORM</Text>
            </View>
            <View style={styles.mainbox}>
                <ImageBackground
                    style={styles.Imageback}
                    source={require("../assets/meeting.svg")}>
                    <View
                        style={{ width: "100%", height: "100%", backgroundColor: "green", opacity: 0.7, justifyContent: "center", alignItems: "center" }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: responsiveFontSize(4)
                            }}
                        >Internship Listing</Text>
                        <View style={{
                            flexDirection: "row",
                            width: responsiveWidth(55),
                            height: responsiveHeight(4),
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20
                        }}>
                            <Text style={{ color: "green" }}> Home/</Text>
                            <Text>Internship Listing</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>
            <Text
            style={{marginLeft:responsiveHeight(0.5),
            marginTop:responsiveHeight(5),
        fontSize:responsiveFontSize(2.8),
    fontWeight:"bold"}}
            >
                Internships on Different Tech Domain
            </Text>
            <Browseinternship/>
            <Reviewfooter/>
            
            </ScrollView>
        </View>


    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    logoimage: {
        width: responsiveWidth(10),
        height: responsiveHeight(5),
    },
    greenname: {
        marginTop: responsiveHeight(0.6),
        fontSize: responsiveFontSize(2.5),
        color: "green",
        fontWeight: "bold"
    },
    blackname: {
        marginTop: responsiveHeight(0.6),
        fontSize: responsiveFontSize(2.5),
        color: "black",
        fontWeight: "bold"
    },
    purplename: {
        marginTop: responsiveHeight(0.6),
        fontSize: responsiveFontSize(1),
        color: "purple",
        fontWeight: "bold"
    },
    mainbox: {

        width: "100%",
        height: responsiveHeight(50),
        backgroundColor: "green",
        marginTop: responsiveHeight(2)
    },
    Imageback: {
        resizeMode: "cover",
        flex: 1
    },

})
export default InternList;