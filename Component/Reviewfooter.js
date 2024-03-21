import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
const Reviewfooter = () => {

    return (
        <View style={styles.container}>
            <View style={styles.mainbox}>
                <ImageBackground
                    style={styles.Imageback}
                    source={require("../assets/meeting.svg")}>
                    <View
                        style={{ width: "100%", height: "100%", backgroundColor: "green", opacity: 0.7 }}
                    >
                        <Text
                            style={{
                                fontSize: responsiveFontSize(2.2),
                                color: "white",
                                fontWeight: "bold",
                                marginTop: responsiveHeight(15),
                                marginLeft: responsiveHeight(2)
                            }}
                        >Internships every months
                        </Text>


                        <Text
                            style={{
                                fontSize: responsiveFontSize(2),
                                marginLeft: responsiveHeight(2),
                                marginRight: responsiveHeight(8),
                                color: "white",
                                marginTop: responsiveHeight(2)
                            }}>Pakistan's Virtual Internship Platform Powered By
                            Introducing Internee.pk, the ultimate platform designed
                            to turbocharge the IT sector in Pakistan! We recognize
                            the immense potential of talented individuals in the country
                            and aim to bridge the gap between them and the thriving IT industry.
                            Internee.pk offers a comprehensive range of virtual internship opportunities
                            exclusively in the IT field</Text>




                    </View>
                </ImageBackground>
            </View>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(3), marginLeft: responsiveHeight(1) }}>
                <Image style={styles.logoimage} source={require("../assets/interneelogo.jpeg")} />
                <View style={{ flexDirection: "row", marginLeft: responsiveHeight(1) }}>
                    <Text style={styles.greenname}>Internee</Text>
                    <Text style={styles.blackname}>.Pk</Text>
                </View>
            </View>
            <View style={{ flexDirection: "column", marginLeft: responsiveHeight(7.8), marginTop: responsiveHeight(-2) }}>
                <Text style={styles.purplename}>VIRTUAL INTERNSHIP PLATFORM</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    marginLeft: responsiveHeight(2),
                    marginTop: responsiveHeight(2)
                }}
            >
                <Ionicons name="globe" size={25} color={"green"} />
                <Text
                    style={{
                        marginTop: responsiveHeight(0.7),
                        marginLeft: responsiveHeight(2)
                    }}
                >www.Internee.pk</Text>

            </View>
            <View
                style={{
                    flexDirection: "row",
                    marginLeft: responsiveHeight(2),
                    marginTop: responsiveHeight(2)
                }}
            >
                <Ionicons name="call" size={25} color={"green"} />
                <View>
                    <Text
                        style={{
                            marginTop: responsiveHeight(0.7),
                            marginLeft: responsiveHeight(2)
                        }}
                    >+923453191638</Text>
                    <Text
                        style={{
                            marginTop: responsiveHeight(0.7),
                            marginLeft: responsiveHeight(2)
                        }}
                    >+923492861021</Text>
                </View>


            </View>
            <View
                style={{
                    flexDirection: "row",
                    marginLeft: responsiveHeight(2),
                    marginTop: responsiveHeight(2)
                }}
            >
                <Ionicons name="mail" size={25} color={"green"} />
                <Text
                    style={{
                        marginTop: responsiveHeight(0.7),
                        marginLeft: responsiveHeight(2)
                    }}
                >info@internee.pk</Text>

            </View>
            <View style={{
                flexDirection: "row",
                marginLeft: responsiveHeight(2.8),
                marginTop: responsiveHeight(2)
            }}>
                <View style={{flexDirection:"column"}}>
                <Text style={{ fontWeight: "bold" }}>Company</Text>
                <View
                style={{marginTop:responsiveHeight(1)}}
                >

                    <TouchableOpacity
                    style={{marginTop:responsiveHeight(1)}}
                    >
                        <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{marginTop:responsiveHeight(1)}}
                    >
                        <Text>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{marginTop:responsiveHeight(1)}}
                    >
                        <Text>Internship</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{marginTop:responsiveHeight(1)}}
                    >
                        <Text>Contact</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{flexDirection:"column",marginLeft:responsiveHeight(10)}}>
                <Text style={{ fontWeight: "bold" }}>Resources</Text>
                <View
                style={{marginTop:responsiveHeight(1)}}
                >

                    <TouchableOpacity
                    style={{marginTop:responsiveHeight(1)}}
                    >
                        <Text>Discod Server</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{marginTop:responsiveHeight(1)}}
                    >
                        <Text>blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{marginTop:responsiveHeight(1)}}
                    >
                        <Text>Podcast</Text>
                    </TouchableOpacity>
                    

                </View>
                </View>
                </View>
        </View>


    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBox: {
        width: responsiveWidth(30),
        height: responsiveHeight(2)
    },
    mainbox: {

        width: "100%",
        height: responsiveHeight(50),
        backgroundColor: "green",
        marginTop: responsiveHeight(4)
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
export default Reviewfooter;