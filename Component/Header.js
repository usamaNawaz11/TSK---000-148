import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const Header=()=>{
    return(
        <View style={styles.container}>
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
        </View>


    )

}
const styles= StyleSheet.create({
    container:{
        flex:1
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
export default Header;