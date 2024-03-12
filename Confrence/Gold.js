import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Members from "../Component/Members";
const Gold=()=>{
    return(
        <View style={styles.container}>
            <Members></Members>
        </View>


    )

}
const styles= StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1

    },

})
export default Gold;