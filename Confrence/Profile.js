import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <View style={styles.back_icon}>
                        <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"arrow-back"} size={30} color={"black"} />
                    </View>
                </TouchableOpacity>
                <Image
                    style={styles.image}
                    source={require("../assets/recom.svg")}
                ></Image>
                <Ionicons name="create" size={24} color="black" style={{marginTop:60,marginLeft:110}} />

            </View>
            <View style={{ alignSelf: "center", marginTop: 10 }}>
                <Text style={styles.name_text}>Oliver Miller</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                    <Ionicons name={"mail"} size={20} />
                    <Text style={styles.email_text}>olivermiller63@gmail.com</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('messagedetail')}>
                    <View style={styles.message_box}>
                        <Ionicons style={{ marginRight: 10, marginTop: 5 }} name={"chatbox-ellipses"} size={20} />
                        <Text style={styles.message_text}>Message</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.bio_box}>
                <Text style={styles.heading}>BIO</Text>
                <Text style={styles.bio_text}>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consecLorem ipsum d...Lorem ipsum dolor sit amet, consector...
                </Text>
            </View>
            <View style={{ marginTop: 40, marginLeft: 30 }}>
                <Text style={styles.heading}>ABOUT ME</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <View style={styles.aboutmesection}>
                <View style={styles.aboutmeicons}>
                    <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"briefcase"} size={30} color={"#7C3AED"} />
                </View>
                <Text style={styles.aboutmedata}>PROFESSION</Text>
                <Text style={styles.aboutmefield}>UI/UX Designer</Text>
            </View>
            <View style={styles.aboutmesection}>
                <View style={styles.aboutmeicons}>
                    <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"home"} size={30} color={"#7C3AED"} />
                </View>
                <Text style={styles.aboutmedata}>SCHOOL</Text>
                <Text style={[styles.aboutmefield, { marginLeft: 28 }]}>Oholo State Clg</Text>
            </View>
            </View>
            <View style={{flexDirection:"row"}}>
            <View style={styles.aboutmesection}>
                <View style={styles.aboutmeicons}>
                    <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"heart"} size={30} color={"#7C3AED"} />
                </View>
                <Text style={styles.aboutmedata}>INTEREST</Text>
                <Text style={[styles.aboutmefield, { marginLeft: 16 }]}>Watching Netflix</Text>
            </View>
            <View style={styles.aboutmesection}>
                <View style={styles.aboutmeicons}>
                    <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"call"} size={30} color={"#7C3AED"} />
                </View>
                <Text style={styles.aboutmedata} >PHONENUMBER</Text>
                <Text style={[styles.aboutmefield]} numberOfLines={1}>+62844-525-253-24</Text>
            </View>
            </View>


        </View>


    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 50,
        alignSelf: "center",
        marginTop: responsiveHeight(8),
        marginLeft: responsiveHeight(9.8)
    },
    back_icon: {
        marginTop: responsiveHeight(6),
        marginLeft: responsiveHeight(2),
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#F4F4F5",
    },
    aboutmeicons: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#F5F3FF",
        marginLeft:25
    },
    name_text: {
        fontWeight: "500",
        fontSize: 16,
        marginLeft: responsiveHeight(6)
    },
    email_text: {
        fontWeight: "400",
        fontSize: 14,
        marginLeft: responsiveHeight(1)
    },
    message_box: {
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 161,
        height: 34,
        borderWidth: 1,
        flexDirection: "row",
        marginTop: responsiveHeight(2),
        borderRadius: 45
    },
    message_text: {
        fontWeight: "600",
        fontSize: 14,
        marginTop: responsiveHeight(1)
    },
    bio_box: {
        marginTop: responsiveHeight(5),
        marginLeft: responsiveHeight(3),
        marginRight: responsiveHeight(2)
    },
    heading: {
        fontSize: 14,
        fontWeight: "700"
    },
    bio_text: {
        marginTop: responsiveHeight(1),
        fontSize: 16,
        fontWeight: "400",
        textAlign: "left"
    },
    aboutmesection: {
        marginTop: responsiveHeight(2),
        marginLeft: responsiveHeight(2.5),
        height:156,
        width:195,
        backgroundColor:"#FAFAFA",
        borderRadius:25
    },
    aboutmedata: {
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveHeight(4),
        fontWeight: "500",
        fontSize: 14
    },
    aboutmefield: {
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveHeight(4),
        fontWeight: "400",
        fontSize: 14
    }


})
export default Profile;