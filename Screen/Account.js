import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

const Account = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgBox}>
                <Image
                    style={styles.img}
                    source={require("../assets/usama1.jpg")}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>Usama nawaz</Text>
                    <Text style={styles.otherText}>kshinwari948@gmail.com</Text>
                </View>
                <Icon name="pencil-outline" size={20} color="black" />

            </View>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(2), height: responsiveHeight(5), borderBottomWidth: 1 }}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="bag-outline" size={25} color="black" />
                    <Text style={styles.button_text}>order</Text>
                    <Icon name="chevron-forward-outline" size={25} color="black" style={{ marginLeft: responsiveHeight(33) }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(2), height: responsiveHeight(5), borderBottomWidth: 1 }}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="bag-outline" size={25} color="black" />
                    <Text style={styles.button_text}>My Detail</Text>
                    <Icon name="chevron-forward-outline" size={25} color="black" style={{ marginLeft: responsiveHeight(29.5) }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(2), height: responsiveHeight(5), borderBottomWidth: 1 }}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="bag-outline" size={25} color="black" />
                    <Text style={styles.button_text}>Delivery address</Text>
                    <Icon name="chevron-forward-outline" size={25} color="black" style={{ marginLeft: responsiveHeight(22.7) }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(2), height: responsiveHeight(5), borderBottomWidth: 1 }}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="bag-outline" size={25} color="black" />
                    <Text style={styles.button_text}>Payment method</Text>
                    <Icon name="chevron-forward-outline" size={25} color="black" style={{ marginLeft: responsiveHeight(22.3) }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(2), height: responsiveHeight(5), borderBottomWidth: 1 }}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="bag-outline" size={25} color="black" />
                    <Text style={styles.button_text}>Promo code</Text>
                    <Icon name="chevron-forward-outline" size={25} color="black" style={{ marginLeft: responsiveHeight(26.7) }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(2), height: responsiveHeight(5), borderBottomWidth: 1 }}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="bag-outline" size={25} color="black" />
                    <Text style={styles.button_text}>Notifications</Text>
                    <Icon name="chevron-forward-outline" size={25} color="black" style={{ marginLeft: responsiveHeight(25.9) }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(2), height: responsiveHeight(5), borderBottomWidth: 1 }}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="bag-outline" size={25} color="black" />
                    <Text style={styles.button_text}>help</Text>
                    <Icon name="chevron-forward-outline" size={25} color="black" style={{ marginLeft: responsiveHeight(33.4) }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: responsiveHeight(2), height: responsiveHeight(5), borderBottomWidth: 1 }}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="bag-outline" size={25} color="black" />
                    <Text style={styles.button_text}>About</Text>
                    <Icon name="chevron-forward-outline" size={25} color="black" style={{ marginLeft: responsiveHeight(31.5) }} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={{height:responsiveHeight(5), 
                   width:responsiveWidth(90), 
                   backgroundColor:"#D3D3D3",
                   marginTop:responsiveHeight(5),
                   marginLeft:responsiveHeight(2),
                   borderRadius:15,
                   
                   }}
                   onPress={()=>{
                    navigation.replace("signin")
                 }}>
                <Text style={{color:"green",
                 textAlign:"center",
                 fontWeight:"bold",
                 marginTop:responsiveHeight(1.5),
                 marginleft:400}}
                >log out</Text>

            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    imgBox: {
        marginTop: responsiveHeight(2.5),
        flexDirection: 'row',
        height: responsiveHeight(10),
        borderBottomWidth: 1
    },
    img: {
        height: responsiveHeight(8),
        width: responsiveWidth(15),
        borderRadius: 75,
        marginLeft: responsiveHeight(2),
    },
    textContainer: {
        marginLeft: responsiveHeight(1.5),
    },
    nameText: {
        fontWeight: 'bold',
        marginTop: responsiveHeight(1.5),
    },
    otherText: {
        // Additional styles for other text
    },
    button: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    button_text: {
        fontSize: responsiveFontSize(2),
        fontWeight: "bold",
        marginLeft: responsiveHeight(2)
    }
});

export default Account;
