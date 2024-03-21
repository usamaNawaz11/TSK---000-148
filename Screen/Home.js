import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Reviewfooter from "../Component/Reviewfooter";
import Internship from "../Component/Internship";
import Header from "../Component/Header";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
               <Header/>

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
                                    marginLeft: responsiveHeight(1)
                                }}
                            >Are you Looking for dream internship?</Text>
                            <Text style={{
                                fontSize: responsiveFontSize(4),
                                marginLeft: responsiveHeight(1),
                                color: "white",
                                fontWeight: "bold",
                                marginTop: responsiveHeight(2)
                            }}>Join </Text>
                            <Text
                                style={{
                                    fontSize: responsiveFontSize(4),
                                    marginLeft: responsiveHeight(1),
                                    color: "white",
                                    fontWeight: "bold",
                                }}>Internee.pk now..!</Text>
                            <Text
                                style={{
                                    fontSize: responsiveFontSize(2),
                                    marginLeft: responsiveHeight(1),
                                    color: "white",
                                    marginTop: responsiveHeight(2)
                                }}>Pakistan's Virtual Internship Platform Powered By</Text>
                            <Text
                                style={{
                                    fontSize: responsiveFontSize(2),
                                    marginLeft: responsiveHeight(1),
                                    color: "purple",
                                    fontWeight: "bold"
                                }}>TechvioChats</Text>
                            <TouchableOpacity
                            onPress={()=> navigation.navigate("intern")}
                                style={styles.browseButton}
                            >
                                <Text
                                    style={{ color: "white" }}
                                >Browse Internships</Text>

                            </TouchableOpacity>


                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.secondBox}>
                    <ImageBackground
                        source={require("../assets/ceo.jpg")}
                        style={styles.Imageback}>
                        <View style={{ alignSelf: "flex-end", marginTop: responsiveHeight(42), marginRight: responsiveHeight(1) }}>

                            <View style={styles.founderBox}>
                                <Text
                                    style={{ color: "white", fontWeight: "bold" }}
                                >Hammad Sheikh</Text>
                                <Text
                                    style={{ color: "white", marginLeft: responsiveHeight(-5.5) }}
                                >Founder</Text>
                            </View>
                        </View>

                    </ImageBackground>

                </View>
                <View style={styles.thirdBox}>
                    <Text style={{
                        fontSize: responsiveFontSize(2.5),
                        marginTop: responsiveHeight(5),
                        marginLeft: responsiveHeight(3),
                        color: "white",
                        fontWeight: "bold"
                    }}>Welcome to Internee.pk</Text>

                    <Text style={{
                        fontSize: responsiveFontSize(2),
                        marginTop: responsiveHeight(1),
                        marginLeft: responsiveHeight(3.3),
                        marginRight: responsiveHeight(2),
                        color: "white",
                        fontWeight: "300"
                    }}>Our internship program is designed to give students the opportunity
                        to work on meaningful projects and tasks, while also receiving mentorship
                        and guidance from experienced professionals in the field. Our goal is to
                        help interns develop the skills and knowledge they need to succeed in
                        their careers, while also building a strong network of talented individuals
                        who may become valuable members of our team in the future. If you're looking
                        for a challenging and rewarding internship experience, we invite you to explore
                        our program and Apply Today</Text>
                    <View style={{
                        flexDirection: "row", marginLeft: responsiveHeight(3),
                        marginTop: responsiveHeight(2)
                    }}>
                        <TouchableOpacity
                        onPress={()=> navigation.navigate("about")}
                            style={{
                                width: responsiveWidth(25),
                                height: responsiveHeight(4),
                                borderWidth: 1,
                                borderColor: "white",
                                justifyContent: "center",
                                borderRadius: 20
                            }}


                        >
                            <Text style={{ color: "white", marginLeft: responsiveHeight(0.5) }}>Get to know us</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=> navigation.navigate("intern")}
                            style={{
                                width: responsiveWidth(30),
                                height: responsiveHeight(4),
                                borderWidth: 1,
                                borderColor: "white",
                                justifyContent: "center",
                                borderRadius: 20,
                                marginLeft: responsiveHeight(4)
                            }}


                        >
                            <Text style={{ color: "white", marginLeft: responsiveHeight(0.5) }}>Explore Internship</Text>

                        </TouchableOpacity>

                    </View>


                </View>
                <View style={[styles.secondBox, { marginTop: responsiveHeight(-1.5) }]}>
                    <ImageBackground
                        source={require("../assets/cmo.jpg")}
                        style={styles.Imageback}>
                        <View style={{ alignSelf: "flex-end", marginTop: responsiveHeight(42), marginRight: responsiveHeight(1) }}>

                            <View style={styles.founderBox}>
                                <Text
                                    style={{ color: "white", fontWeight: "bold" }}
                                >Rayyan Zain</Text>
                                <Text
                                    style={{ color: "white", marginLeft: responsiveHeight(-5.5) }}
                                >CMO</Text>
                            </View>
                        </View>

                    </ImageBackground>

                </View>
                <Text style={{
                    textAlign: "center",
                    fontSize: responsiveFontSize(3),
                    marginTop: responsiveHeight(2),
                    fontWeight: "bold"
                }}>Browse by Categories</Text>
                <View style={{
                    flexDirection: "row",
                    marginLeft: responsiveHeight(3.5),
                    marginTop: responsiveHeight(5)
                }}>
                    <TouchableOpacity style={styles.circleBox}>


                        <View
                            style={styles.innerCircle}
                        >
                            <Text style={{
                                color: "white",
                                marginTop: responsiveHeight(1)
                            }}>05</Text>
                        </View>
                        <Ionicons name="calendar" size={32} color="white"
                            style={{ alignSelf: "center" }}
                        />
                        <Text
                            style={{
                                marginLeft: responsiveHeight(0.5),
                                marginTop: responsiveHeight(1),
                                color: "white"
                            }}
                        >Website Designings</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={[styles.circleBox, { marginLeft: responsiveHeight(8) }]}>
                            <View
                                style={styles.innerCircle}
                            >
                                <Text style={{
                                    color: "white",
                                    marginTop: responsiveHeight(1)
                                }}>05</Text>
                            </View>
                            <Ionicons name="earth" size={32} color="white"
                                style={{ alignSelf: "center" }}
                            />
                            <Text
                                style={{
                                    marginLeft: responsiveHeight(1),
                                    marginTop: responsiveHeight(1),
                                    color: "white"
                                }}
                            >Web Development</Text>

                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{
                    flexDirection: "row",
                    marginLeft: responsiveHeight(3.5),
                    marginTop: responsiveHeight(5)
                }}>
                    <TouchableOpacity style={styles.circleBox}>
                        <View
                            style={styles.innerCircle}
                        >
                            <Text style={{
                                color: "white",
                                marginTop: responsiveHeight(1)
                            }}>04</Text>
                        </View>
                        <Icon name="tv" size={30} color="white"
                            style={{ alignSelf: "center" }}
                        />
                        <Text
                            style={{
                                marginLeft: responsiveHeight(1.2),
                                marginTop: responsiveHeight(1),
                                color: "white"
                            }}
                        >CRM's & Chatbot Development</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.circleBox, { marginLeft: responsiveHeight(8) }]}>
                        <View
                            style={styles.innerCircle}
                        >
                            <Text style={{
                                color: "white",
                                marginTop: responsiveHeight(1)
                            }}>05</Text>
                        </View>
                        <Icon name="pencil" size={30} color="white"
                            style={{ alignSelf: "center" }}
                        />
                        <Text
                            style={{
                                marginLeft: responsiveHeight(1.2),
                                marginTop: responsiveHeight(1),
                                color: "white"
                            }}
                        >Graphic Designing & 3D Modeling</Text>

                    </TouchableOpacity>


                </View>
                <View style={{
                    flexDirection: "row",
                    marginLeft: responsiveHeight(16),
                    marginTop: responsiveHeight(5)
                }}>
                    <TouchableOpacity style={styles.circleBox}>
                        <View
                            style={styles.innerCircle}
                        >
                            <Text style={{
                                color: "white",
                                marginTop: responsiveHeight(1)
                            }}>06</Text>
                        </View>
                        <Icon name="mobile" size={30} color="white"
                            style={{ alignSelf: "center" }}
                        />
                        <Text
                            style={{
                                marginLeft: responsiveHeight(1.2),
                                marginTop: responsiveHeight(1),
                                color: "white"
                            }}
                        >Mobile Application Development</Text>
                    </TouchableOpacity>


                </View>
                <View style={[styles.thirdBox, { marginTop: responsiveHeight(1), backgroundColor: "green", height: responsiveHeight(40) }]}>
                    <Text style={{
                        fontSize: responsiveFontSize(2.5),
                        marginTop: responsiveHeight(5),
                        marginLeft: responsiveHeight(3),
                        color: "white",
                        fontWeight: "bold"
                    }}>Launching tech careers with internships, exposure, and networking.
                    </Text>

                    <Text style={{
                        fontSize: responsiveFontSize(2),
                        marginTop: responsiveHeight(1),
                        marginLeft: responsiveHeight(3.3),
                        marginRight: responsiveHeight(2),
                        color: "white",
                        fontWeight: "300"
                    }}>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.
                    </Text>
                    <View style={{ flexDirection: "row", marginTop: responsiveHeight(4), marginLeft: responsiveHeight(4.5) }}>
                        <Text
                            style={{ color: "white", fontSize: responsiveFontSize(3), fontWeight: "bold" }}
                        >5000+</Text>
                        <Text
                            style={{ color: "white", fontSize: responsiveFontSize(3), fontWeight: "bold", marginLeft: responsiveHeight(9) }}
                        >35+</Text>

                    </View>
                    <View style={{ flexDirection: "row", marginTop: responsiveHeight(0.5), marginLeft: responsiveHeight(4.8) }}>
                        <Text
                            style={{ color: "white", fontSize: responsiveFontSize(1.5), fontWeight: "300" }}
                        >Registered user</Text>
                        <Text
                            style={{ color: "white", fontSize: responsiveFontSize(1.5), fontWeight: "300", marginLeft: responsiveHeight(8) }}
                        >Opening Internships</Text>

                    </View>
                </View>
                <View style={[styles.secondBox, { marginTop: responsiveHeight(-1.5) }]}>
                    <ImageBackground
                        source={require("../assets/collab.jpg")}
                        style={styles.Imageback}>

                    </ImageBackground>

                </View>
                <Text
                    style={{
                        marginTop: responsiveHeight(3),
                        marginLeft: responsiveHeight(2.8),
                        fontSize: responsiveFontSize(2.5),
                        fontWeight: "bold"
                    }}
                >Recent Interships</Text>
                <Text
                    style={{
                        marginTop: responsiveHeight(3),
                        marginLeft: responsiveHeight(2.8),
                        fontSize: responsiveFontSize(1.8),
                        fontWeight: "600",
                        opacity: 0.8
                    }}
                >Internships came after every two months </Text>
                <Text
                    style={{
                        marginTop: responsiveHeight(0.5),
                        marginLeft: responsiveHeight(2.8),
                        fontSize: responsiveFontSize(1.8),
                        marginRight: responsiveHeight(1.9),
                        opacity: 0.5
                    }}
                >Grab your internships on your favourite domain to boost up yourself in the field of Computer technology </Text>
                <Internship/>
                <TouchableOpacity 
                onPress={()=> navigation.navigate("intern")}
                style={styles.Browsebox}>
                    <Text
                    style={styles.browseText}
                    >Browse Internship</Text>

                </TouchableOpacity>
                <Reviewfooter/>
                
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    browseText:{
        color:"white",
        fontSize:responsiveFontSize(2),
        fontWeight:"bold"
    },
   Browsebox:{
    width:responsiveWidth(60),
    height:responsiveHeight(7),
    backgroundColor:"#8A2BE2",
    marginLeft:responsiveHeight(2.8),
    marginTop:responsiveHeight(2),
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center"

   },
    Imageback: {
        resizeMode: "cover",
        flex: 1
    },
    founderBox: {
        width: responsiveWidth(30),
        height: responsiveHeight(7),
        borderRadius: 25,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },
    circleBox: {
        width: responsiveWidth(35),
        height: responsiveHeight(17),
        borderRadius: 100,
        backgroundColor: "green",
        borderWidth: 6,
        borderColor: "#8A2BE2",

    },
    
    
    
    innerCircle: {
        width: responsiveWidth(8),
        height: responsiveHeight(3.5),
        borderRadius: 18,
        backgroundColor: "#8A2BE2",
        alignItems: "center",
        marginLeft: responsiveHeight(11)

    },
    secondBox: {
        width: responsiveWidth(90),
        height: responsiveHeight(50),
        borderRadius: 25,
        marginTop: responsiveHeight(4),
        marginLeft: responsiveHeight(2.5),
        backgroundColor: "green"
    },
    thirdBox: {
        width: responsiveWidth(90),
        height: responsiveHeight(50),
        marginLeft: responsiveHeight(2.5),
        backgroundColor: "#8A2BE2"

    },
    browseButton: {
        width: responsiveWidth(35),
        height: responsiveHeight(3),
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: "white",
        marginTop: responsiveHeight(2),
        marginLeft: responsiveHeight(1),
        justifyContent: "center",
        alignItems: "center"

    },
    
    mainbox: {

        width: "100%",
        height: responsiveHeight(50),
        backgroundColor: "green",
        marginTop: responsiveHeight(4)
    }
});

export default Home;
