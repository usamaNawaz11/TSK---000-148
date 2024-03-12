
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Button,
    ScrollView,
} from "react-native";
import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans/400.css"; // Specify weight
import "@fontsource/plus-jakarta-sans/400-italic.css"; // Specify weight and style
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";
import Search from "../Component/Search";

const Message = ({navigation}) => {
    const [message, setMessage] = useState([
        {
            id: "1",
            Image: require("../assets/av3.svg"),
            name: "Annette Black",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "2",
            Image: require("../assets/av4.svg"),
            name: "Leslie Alexander",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "3",
            Image: require("../assets/av5.svg"),
            name: "Floyd Miles",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "4",
            Image: require("../assets/av6.svg"),
            name: "Devon Lane",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "5",
            Image: require("../assets/av7.svg"),
            name: "Marvin McKinney",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "6",
            Image: require("../assets/av8.svg"),
            name: "Jerome Beji",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "7",
            Image: require("../assets/av9.svg"),
            name: "Eleanor Pena",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "8",
            Image: require("../assets/av10.svg"),
            name: "Anna Bell",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "9",
            Image: require("../assets/av9.svg"),
            name: "Eleanor pena",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "10",
            Image: require("../assets/av9.svg"),
            name: "Eleanor pena",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "11",
            Image: require("../assets/av11.svg"),
            name: "Floyd Miles",
            message: "Hey There what's up? is eve..."
        },
        {
            id: "12",
            Image: require("../assets/av11.svg"),
            name: "Floyd Miles",
            message: "Hey There what's up? is eve..."
        },
    ]);
    


    const messagess = ({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('messagedetail')}>
            <View style={styles.message_style}>
              <Image style={styles.allimage} source={item.Image} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.all_name_style}>{item.name}</Text>
                  <Text style={{ textAlign: "right" }}>04:43</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.all_company_style}>{item.message}</Text>
                <Ionicons name="checkmark-done-sharp" size={16} color="black" />

                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      };
      

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>INBOX</Text>
            <Search></Search>
            
                <View>
                    <Text style={styles.message_notification}>ALL MESSAGES(12)</Text>
                </View>
            <View style={{ flex: 1 }}>
                
                    <FlatList
                        data={message}
                        renderItem={messagess}
                        keyExtractor={(item) => item.id}
                    />
                    
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    heading:{
        fontSize:16,
        fontWeight:"700",
        marginTop:responsiveHeight(8),
        textAlign:"center"
    },
    message_notification:{
        fontSize:14,
        fontWeight:"700",
        color:"#71717A",
        marginLeft:responsiveHeight(3),
        marginTop:responsiveHeight(2)
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
        marginTop: responsiveHeight(2),
        marginLeft: responsiveHeight(1),
        borderRadius: 20,
    },
   
    
    allimage: {
        width: 46,
        height: 46,
        borderRadius: 25,
        marginLeft:responsiveHeight(2)
    },
    all_name_style: {
        fontWeight: "500",
        fontSize: 16,
        marginTop: 10,
        marginLeft:responsiveHeight(2)
    },
    all_company_style: {
        fontWeight: "400",
        fontSize: 14,
        color: "#52525B",
        marginLeft:responsiveHeight(2)

    },
    message_style:{
        flexDirection:"row",
        margin:10
    }
    
});

export default Message;
