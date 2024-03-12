import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Messagedetail = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading_style}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <View style={styles.back_icon}>
                        <Ionicons style={{ marginLeft: 10, marginTop: 5 }} name={"arrow-back"} size={30} color={"#71717A"} />
                    </View>
                </TouchableOpacity>
                <Image
                    style={styles.profile}
                    source={require("../assets/av5.svg")}
                />
                <View style={styles.online}></View>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.name}>Leslie Alexander</Text>
                    <Text style={styles.status}>Online</Text>
                </View>
                <View style={styles.vertical_icon}>
                    <Ionicons style={{ marginLeft: 13, marginTop: 10 }} name={"ellipsis-vertical"} size={25} color={"white"} />
                </View>
            </View>
            <ScrollView>

                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.right_name}>Lesilie Alexander -</Text>
                    <Text style={styles.right_date}>11:00PM</Text>
                </View>
                <View style={styles.right_message}>
                    <Text style={styles.right_message_text}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                    </Text>

                </View>
                <View style={{ flexDirection: "row-reverse", marginTop: responsiveHeight(2), marginLeft: 20 }}>
                    <Text style={styles.left_name}>- James</Text>
                    <Text style={styles.left_date}> 11:00PM .</Text>
                </View>
                <View style={styles.left_message}>
                    <Text style={styles.left_message_text}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                    </Text>
                </View>
                <View style={styles.left_message}>
                    <Text style={styles.left_message_text}>
                        Excepteur sint occaecat cupidatat non
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.right_name}>Lesilie Alexander -</Text>
                    <Text style={styles.right_date}>11:00PM</Text>
                </View>
                <View style={[styles.right_message, { height: 123 }]}>
                    <Text style={styles.right_message_text}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                    </Text>
                    <Text style={styles.right_message_text}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                    </Text>

                </View>
                <View style={{ flexDirection: "row-reverse", marginTop: responsiveHeight(2), marginLeft: 20 }}>
                    <Text style={styles.left_name}>- James</Text>
                    <Text style={styles.left_date}> 11:00PM .</Text>
                </View>
                <View style={styles.left_message}>
                    <Text style={styles.left_message_text}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.right_name}>Lesilie Alexander -</Text>
                    <Text style={styles.right_date}>11:00PM</Text>
                </View>
                <View style={[styles.right_message, { height: 41 }]}>
                    <Text style={styles.right_message_text}>
                        Excepteur sint occaecat cupidatat
                    </Text>
                </View>

            </ScrollView>
            <TextInput
                style={styles.message_typer}
                placeholder="Type here"
            />
            <View style={styles.iconContainer}>
                <Ionicons name="happy" size={24} color="black" style={styles.icon} />
                <Ionicons name="mic" size={24} color="black" style={styles.icon} />
                <Ionicons name="attach" size={24} color="black" style={styles.icon} />
                <View style={styles.send_icon} >
                    <Ionicons name="send" size={24} color="white" />
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
    send_icon: {
        width: 40,
        height: 45,
        borderRadius: 12,
        backgroundColor: "#885CF6",
        marginBottom:-10,
        justifyContent:"center"


    },
    iconContainer: {
        marginLeft: responsiveHeight(28),
        marginBottom: responsiveHeight(6),
        flexDirection: "row",

        },
    icon: {
        marginHorizontal: 5,
    },
    message_typer: {
        width: 400,
        height: 66,
        borderRadius: 50,
        backgroundColor: "#F4F4F5",
        paddingLeft: 20,
        marginLeft: responsiveHeight(2),
        marginBottom: responsiveHeight(-5)
    },
    heading_style: {
        width: 430,
        height: 150,
        flexDirection: "row",
        backgroundColor: "black"
    },
    back_icon: {
        marginTop: responsiveHeight(8)
    },
    profile: {
        marginTop: responsiveHeight(8),
        width: 46,
        height: 46,
        borderRadius: 23
    },
    online: {
        marginTop: responsiveHeight(11),
        marginLeft: responsiveHeight(-1),
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#4ADE80"
    },
    name: {
        marginTop: responsiveHeight(8),
        marginLeft: responsiveHeight(2),
        color: "white",
        fontWeight: "600",
        fontSize: 15
    },
    status: {
        marginTop: responsiveHeight(1),
        marginLeft: responsiveHeight(2),
        color: "#D4D4D8",
        fontWeight: "400",
        fontSize: 13
    },
    vertical_icon: {
        marginTop: responsiveHeight(6),
        marginLeft: responsiveHeight(14),
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#27272A",
        alignSelf: "center"
    },
    right_name: {
        marginTop: responsiveHeight(2),
        marginLeft: responsiveHeight(2),
        fontWeight: "400",
        fontSize: 16
    },
    right_date: {
        marginTop: responsiveHeight(2.3),
        fontWeight: "400",
        fontSize: 13
    },
    left_name: {
        textAlign: "right",
        fontWeight: "400",
        fontSize: 16
    },
    left_date: {
        marginTop: responsiveHeight(0.3),
        textAlign: "right",
        fontWeight: "400",
        fontSize: 13
    },
    right_message: {
        width: 342,
        height: 75,
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: "#F4F4F5",
        marginTop: responsiveHeight(2),
        marginLeft: responsiveHeight(2)
    },
    right_message_text: {
        marginTop: responsiveHeight(1),
        marginLeft: responsiveHeight(1),
        fontSize: 14,
        fontWeight: "400",
        color: "#18181B"
    },
    left_message: {
        width: 342,
        height: 75,
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: "#885CF6",
        marginTop: responsiveHeight(2),
        marginLeft: responsiveHeight(7)
    },
    left_message_text: {
        marginTop: responsiveHeight(1),
        marginLeft: responsiveHeight(1),
        fontSize: 14,
        fontWeight: "400",
        color: "white"
    }

})
export default Messagedetail;