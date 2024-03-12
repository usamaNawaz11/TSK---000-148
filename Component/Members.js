import React from 'react';
import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TextInput,
    FlatList,
    Button
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { LinearGradient } from 'expo-linear-gradient';
const Members = () => {
    const [member,setMember]=useState([
    {
        id: "1",
        Image: require("../assets/amazon.svg"),
        name: "Amazon",
        colors: ['#65A30D', '#65A30D', '#65A30D'],
        member:"Gold member"
    },
    {
        id: "2",
        Image: require("../assets/apple.svg"),
        name: "AppleInc",
        colors: ['#010004', '#007BA2', '#000004'],
        member:"Platinium member"
    },
    {
        id: "3",
        Image: require("../assets/wallmart.svg"),
        name: "Wallmart",
        colors: ['#DADADA', '#DBDBDB','#A3A3A3'],
        member:"silver member"
    },
    {
        id: "4",
        Image: require("../assets/amazon.svg"),
        name: "Amazon",
        colors: ['#65A30D', '#65A30D', '#65A30D'],
        member:"Gold member"

    },
    {
        id: "5",
        Image: require("../assets/apple.svg"),
        name: "AppleInc",
        colors: ['#010004', '#007BA2', '#000004'],
        member:"Platinium member"
    },
    {
        id: "6",
        Image: require("../assets/wallmart.svg"),
        name: "Wallmart",
        colors: ['#DADADA', '#DBDBDB','#A3A3A3'],
        member:"silver member"
    },
    {
        id: "7",
        Image: require("../assets/amazon.svg"),
        name: "Amazon",
        colors: ['#65A30D', '#65A30D', '#65A30D'],
        member:"Gold member"
    },
    {
        id: "8",
        Image: require("../assets/apple.svg"),
        name: "AppleInc",
        colors: ['#010004', '#007BA2', '#000004'],
        member:"Platinium member"
    },
    {
        id: "9",
        Image: require("../assets/wallmart.svg"),
        name: "Wallmart",
        colors: ['#DADADA', '#DBDBDB','#A3A3A3'],
        member:"silver member"
    },
])


const MemberrenderItem = ({ item }) => (
    <TouchableOpacity style={{ marginLeft: responsiveHeight(1) }}>
      <View style={styles.itemContainer}>
        <View style={styles.subimageContainer}>
          <Image style={styles.subimage} source={item.Image} />
        </View>
        <Text style={styles.subtext}>{item.name}</Text>
        <LinearGradient
          colors={item.colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 0.5, 1]} // specify the location of each color
          style={styles.gradient}
        >
          <Text style={styles.member}>{item.member}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );

    return (
        <View style={styles.Container}>
            
            <FlatList
                data={member}
                keyExtractor={(item) => item.id.toString()}
                renderItem={MemberrenderItem}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: responsiveHeight(2) }}
                numColumns={2}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    
    
    verticalItem: {
        flex: 1,
      },
      itemContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'visible',
        alignItems: 'center',
        marginTop:responsiveHeight(7),
        backgroundColor:"#F4F4F5",
        width:194,
        height:149
      },
      gradient: {
        bottom: 0,
        left: 0,
        right: 0,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:responsiveHeight(2),
        height:responsiveHeight(3.9),
        width:162
      },
      member:{
        fontSize:responsiveFontSize(1.4),
        fontWeight:"600",
        color:"white"

      },
   

    subimage: {
        height: 70,
        width: 70,
        borderRadius:43,
        marginTop: responsiveHeight(-4)
    },
    subtext: {
        fontSize: responsiveFontSize(1.6),
        fontWeight: "500",
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveHeight(0),
        textAlign:"center"
    },
})

export default Members;