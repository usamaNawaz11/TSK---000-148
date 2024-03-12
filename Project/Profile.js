import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,// Import KeyboardAvoidingView
    ScrollView
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo icons
const Profile = ({ navigation }) => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView>
                <View style={styles.box}>
                    <LinearGradient style={styles.box} colors={['#FF0000', '#3A61C9', '#EEBF25']}
                        start={{ x: 0.0001, y: 0.5 }}
                        end={{ x: 1.2, y: 0.5 }} >
                        <View style={{ flexDirection: "row" }}>
                            <View style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderWidth: 1,
                                borderStyle: "dotted",
                                borderColor: "white",
                                marginTop: 20,
                                marginLeft: -40
                            }} />
                            <View />
                            <View style={{
                                height: 75,
                                width: 75,
                                borderRadius: 50,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderWidth: 1,
                                borderStyle: "dotted",
                                borderColor: "white",
                                marginTop: 10,
                                marginLeft: -40
                            }} />
                            <View />
                        </View>

                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            marginLeft: 45,
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                            marginTop: -50
                        }} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View
                                style={{
                                    height: 200,
                                    width: 200,
                                    borderRadius: 100,
                                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                                    marginTop: 10,
                                    marginLeft: -80
                                }}
                            />
                            <View style={{ flexDirection: "row-reverse" }}>
                                <View
                                    style={{
                                        height: 50,
                                        width: 50,
                                        borderRadius: 25,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: 80,
                                        marginRight: 70
                                    }}
                                />
                                <View
                                    style={{
                                        height: 75,
                                        width: 75,
                                        borderRadius: 50,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: 60,
                                        marginRight: -62
                                    }}
                                />
                                <View
                                    style={{
                                        height: 100,
                                        width: 100,
                                        borderRadius: 75,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: 50,
                                        marginRight: -87
                                    }}
                                />
                                <View
                                    style={{
                                        height: 125,
                                        width: 125,
                                        borderRadius: 100,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: 40,
                                        marginRight: -112
                                    }}
                                />
                                <View
                                    style={{
                                        height: 150,
                                        width: 150,
                                        borderRadius: 125,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: 30,
                                        marginRight: -138
                                    }}
                                />
                                <View
                                    style={{
                                        height: 175,
                                        width: 175,
                                        borderRadius: 150,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: 20,
                                        marginRight: -163
                                    }}
                                />
                                <View
                                    style={{
                                        height: 200,
                                        width: 200,
                                        borderRadius: 175,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: 10,
                                        marginRight: -188
                                    }}
                                />
                                <View
                                    style={{
                                        height: 225,
                                        width: 225,
                                        borderRadius: 200,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: 0,
                                        marginRight: -214
                                    }}
                                />
                                <View
                                    style={{
                                        height: 250,
                                        width: 250,
                                        borderRadius: 225,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: -10,
                                        marginRight: -237
                                    }}
                                />
                                <View
                                    style={{
                                        height: 275,
                                        width: 275,
                                        borderRadius: 250,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: -20,
                                        marginRight: -263
                                    }}
                                />
                                <View
                                    style={{
                                        height: 300,
                                        width: 300,
                                        borderRadius: 275,
                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "white",
                                        marginTop: -30,
                                        marginRight: -288
                                    }}
                                />


                            </View>
                        </View>
                    </LinearGradient>
                    <Image
                        style={styles.img_box}
                        source={require("../assets/intern.jpg")} />
                    <Text style={styles.head_text} >Ahmed saber</Text>
                    <Text style={styles.label_text}> Username</Text>
                    <TextInput
                        style={styles.input_text}
                        placeholder="username"
                    ></TextInput>
                    <Text style={styles.label_text1}> Email</Text>
                    <TextInput
                        style={styles.input_text}
                        placeholder="Email"
                    ></TextInput>
                    <Text style={styles.label_text1}>Gender</Text>
                    <TextInput
                        style={styles.input_text}
                        placeholder="Gender"
                    ></TextInput>
                    <View >

                        <TouchableOpacity>
                            <View style={{
                                width: 370,
                                backgroundColor: "blue",
                                height: 50,
                                alignSelf: "center",
                                marginTop: 10,
                            }}>

                                <Text style={{
                                    fontSize: 20,
                                    color: "white",
                                    textAlign: "center",
                                    marginTop: 10
                                }}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ fontSize: 13, marginLeft: 20 }}>Don't have an account?</Text>
                            <TouchableOpacity
                                onPress={() => [
                                    navigation.navigate("signup")
                                ]}
                            >
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        borderBottomWidth: 1,
                                        borderStyle: "solid",
                                        borderColor: "black",
                                        paddingBottom: 5
                                    }}
                                >Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    eyeIconContainer: {
        marginLeft: 350,
        marginTop: -40
    },
    passwordInputContainer: {
        flexDirection: "row"
    },
    img_box: {
        width: 105,
        height: 100,
        marginTop: -50,
        borderRadius: 10,
        alignSelf: "center"
    },
    input_text: {
        width: 360,
        height: 50,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 12,
        marginLeft: 30,
        marginTop: 10,
        paddingLeft: 20
    },
    label_text1: {
        marginTop: 20,
        fontSize: 15,
        fontWeight: "200",
        marginLeft: 30
    },
    label_text: {
        marginTop: 30,
        fontSize: 15,
        fontWeight: "200",
        marginLeft: 30
    },
    head_text: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    box: {
        alignContent: "center",
        alignSelf: "center",
        width: "100%",
        height: 230,
    }
});

export default Profile;