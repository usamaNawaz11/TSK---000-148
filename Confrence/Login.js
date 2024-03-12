import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const Login=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={{marginTop:100}}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <Text>login</Text>
                </TouchableOpacity>
            </View>
        </View>


    )

}
const styles= StyleSheet.create({
    container:{
        flex:1

    },


})
export default Login;