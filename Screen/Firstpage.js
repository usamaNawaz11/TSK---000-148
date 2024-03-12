import React from "react";
import { StatusBar } from 'expo-status-bar';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Firstpage = ({navigation}) => {
    return (
        <ImageBackground
            style={styles.img}
            source={require("../assets/ddd.avif")}
        >
            <View style={styles.container}>
                <Icon name='carrot' size={responsiveHeight(9)} color={"white"} style={{ transform: [{ rotate: '40deg' }], marginTop: 300 }}></Icon>

                <Text style={{ fontSize: responsiveFontSize(5), color: "white" }}>Wellcome</Text>
                <Text style={{ fontSize: responsiveFontSize(5), color: "white" }}>to our store</Text>
                <Text style={{ fontSize: responsiveFontSize(2), color: "white", fontWeight: "100" }}>Get your grocceries in as fast as one hour</Text>
                <TouchableOpacity
                    style={styles.butt}
                    onPress={()=>{
                        navigation.navigate("signup")
                    }}>
                    <Text style={{ color: "white", fontSize: responsiveFontSize(2.5), alignSelf: "center", marginTop: 10 }}
                    >Get started</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />


            </View>
        </ImageBackground>



    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    butt: {
        backgroundColor: "green",
        fontSize: responsiveFontSize(2.5),
        bottom: 0,
        position: "absolute",
        marginBottom: 140,
        height: responsiveHeight(5),
        width: responsiveWidth(50),
        borderRadius: 30
    }

})
export default Firstpage;