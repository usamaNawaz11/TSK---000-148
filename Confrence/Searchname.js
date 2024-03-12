import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const Searchname=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.search_box}>
                    <Ionicons
                        style={styles.search_icon}
                        name={"search"}
                        size={20}
                        color={"#A1A1AA"}
                    />
                    <TextInput
                        placeholder="search"
                        style={styles.input_search}
                    ></TextInput>
                    <TouchableOpacity 
                    onPress={() => navigation.goBack()} 
                    style={{marginLeft:260,marginTop:10,width:25,height:25,borderRadius:12.5,backgroundColor:"white"}}>
                    <Ionicons  name="close-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:20}}>
                    <Text style={[styles.recentext,{marginLeft:20}]}>
                        Recent Searches
                    </Text>
                    <Text style={[styles.recentext,{marginRight:20}]}>
                        clear all
                    </Text>
                    
                    </View>
                    <View style={{flexDirection:"row", marginTop:20}}>
                    <Ionicons style={{marginLeft:20}} name="time-outline" size={24} color="black" />
                    <Text style={[styles.recentname,{marginLeft:10}]}>
                        Courtney henry
                    </Text>
                    <Text style={[styles.recentext,{marginLeft:165}]}>
                        468results
                    </Text>

                </View>
                <View style={{flexDirection:"row", marginTop:20}}>
                    <Ionicons style={{marginLeft:20}} name="time-outline" size={24} color="black" />
                    <Text style={[styles.recentname,{marginLeft:10}]}>
                        George Mark
                    </Text>
                    <Text style={[styles.recentext,{marginLeft:185}]}>
                        468results
                    </Text>

                </View>
                <View style={{flexDirection:"row", marginTop:20}}>
                    <Ionicons style={{marginLeft:20}} name="time-outline" size={24} color="black" />
                    <Text style={[styles.recentname,{marginLeft:10}]}>
                        Richard Graves
                    </Text>
                    <Text style={[styles.recentext,{marginLeft:170}]}>
                        468results
                    </Text>

                </View>
                <View style={{flexDirection:"row", marginTop:20}}>
                    <Ionicons style={{marginLeft:20}} name="time-outline" size={24} color="black" />
                    <Text style={[styles.recentname,{marginLeft:10}]}>
                        Annette Black
                    </Text>
                    <Text style={[styles.recentext,{marginLeft:180}]}>
                        468results
                    </Text>

                </View>
                <View style={{flexDirection:"row", marginTop:20}}>
                    <Ionicons style={{marginLeft:20}} name="time-outline" size={24} color="black" />
                    <Text style={[styles.recentname,{marginLeft:10}]}>
                        Devone lane
                    </Text>
                    <Text style={[styles.recentext,{marginLeft:193}]}>
                        468results
                    </Text>

                </View>
                <View style={{flexDirection:"row", marginTop:20}}>
                    <Ionicons style={{marginLeft:20}} name="time-outline" size={24} color="black" />
                    <Text style={[styles.recentname,{marginLeft:10}]}>
                        Arlene McCoy
                    </Text>
                    <Text style={[styles.recentext,{marginLeft:183}]}>
                        468results
                    </Text>

                </View>
                <View style={{flexDirection:"row", marginTop:20}}>
                    <Ionicons style={{marginLeft:20}} name="time-outline" size={24} color="black" />
                    <Text style={[styles.recentname,{marginLeft:10}]}>
                        Wade Warren
                    </Text>
                    <Text style={[styles.recentext,{marginLeft:185}]}>
                        468results
                    </Text>

                </View>
        </View>

    )

}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    recentext:{
        fontSize:14,
        fontWeight:"400"

    },
    recentname:{
        fontSize:16,
        fontWeight:"500"

    },
    search_icon: {
        paddingLeft: responsiveHeight(1.3),
        paddingTop: responsiveHeight(1),
    },
    input_search: {
        paddingLeft: responsiveHeight(1),
        paddingTop: responsiveHeight(0.5),
    },
    search_box: {
        flexDirection: "row",
        width: 400,
        height: 43,
        backgroundColor: "#f4f4f5",
        marginTop: responsiveHeight(5),
        marginLeft: responsiveHeight(1),
        borderRadius: 20,
    },

})
export default Searchname;