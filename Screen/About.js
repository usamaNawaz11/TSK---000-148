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
import Reviewfooter from "../Component/Reviewfooter";
const About = ({navigation}) => {
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
                            >About</Text>
                            <View style={{
                                flexDirection: "row",
                                width: responsiveWidth(30),
                                height: responsiveHeight(4),
                                backgroundColor: "white",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 20
                            }}>
                                <Text style={{ color: "green" }}> Home/</Text>
                                <Text>About</Text>
                            </View>

                        </View>
                    </ImageBackground>
                </View>
                <View
                    style={styles.titlePart}
                >
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2.8),
                            fontWeight: "bold"
                        }}
                    >Introducing Internee.pk</Text>
                    <Text
                        style={{
                            fontSize: responsiveFontSize(2.2),
                            fontWeight: "200",
                            marginTop: responsiveHeight(2)
                        }}
                    >
                        The ultimate platform designed to turbocharge the IT sector in Pakistan!
                        We recognize the immense potential of talented individuals in the country
                        and aim to bridge the gap between them and the thriving IT industry.
                        Internee.pk offers a comprehensive range of virtual internship opportunities exclusively
                        in the IT field.
                    </Text>

                </View>
                <View style={{
                    flexDirection: "row",
                    marginLeft: responsiveHeight(2.8),
                    marginTop: responsiveHeight(2),
                }}>
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("intern")}
                    style={styles.button}>
                        <Text
                            style={{
                                textAlign: "center",
                                marginTop:responsiveHeight(1),
                                color:"#8A2BE2"
                            }}
                        >Explore Internship</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { borderWidth: 0 }]}>
                        <Text
                         style={{
                            textAlign: "center",
                            marginTop:responsiveHeight(1)
                        }}>Contact us</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.secBox}>
                    <ImageBackground
                        style={styles.Imageback}
                        source={require("../assets/meeting.svg")}>
                            </ImageBackground>
                            </View>
                            <Reviewfooter
                            />
            </ScrollView>
        </View>


    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    titlePart: {
        marginTop: responsiveHeight(4),
        marginLeft: responsiveHeight(2.8),
        marginRight: responsiveHeight(4)

    },
    button: {
        width: responsiveWidth(40),
        height: responsiveHeight(4),
        borderRadius: 25,
        backgroundColor: "white",
        borderWidth: 0.3,

    },
    mainbox: {

        width: "100%",
        height: responsiveHeight(50),
        backgroundColor: "green",
        marginTop: responsiveHeight(2)
    },
    secBox: {

        width: responsiveWidth(80),
        height: responsiveHeight(70),
        backgroundColor: "green",
        marginTop: responsiveHeight(5),
        marginLeft:responsiveHeight(4),
        marginBottom:responsiveHeight(4)
    },
    Imageback: {
        resizeMode: "cover",
        flex: 1
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


})
export default About;