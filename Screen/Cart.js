import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Text, View, Image , TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { removeCourse } from '../Reduxtoolkit/Courseslice';

const Cart = () => {
  const courses = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const remove = (index) => {
    dispatch(removeCourse(index));
  };

  const internshipItem = ({ item, index }) => {
    return (
      <View style={styles.internShip}>
        <Image source={item.image} style={styles.internshipBox} />
        <View style={{ marginLeft: responsiveHeight(2), marginTop: responsiveHeight(2) }}>
          <Text style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}>{item.title}</Text>
          <View style={{ flexDirection: "row", marginTop: responsiveHeight(2) }}>
            <Ionicons name="location" size={25} color="green" />
            <Text style={{ marginTop: responsiveHeight(0.6), fontWeight: "200", marginLeft: responsiveHeight(1) }}>{item.location}</Text>
            <Ionicons style={{ marginLeft: responsiveHeight(3) }} name="timer" size={25} color="green" />
            <Text style={{ marginTop: responsiveHeight(0.6), fontWeight: "200", marginLeft: responsiveHeight(1) }}>{item.duration}</Text>
          </View>
          <View style={styles.lineView} />
          <TouchableOpacity onPress={() => remove(index)} style={styles.applyNow}>
            <Text style={{ color: "white" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={courses}
        renderItem={internshipItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles= StyleSheet.create({
  container:{
    flex:1
  },
  internShip: {
    width: responsiveWidth(90),
    height: responsiveHeight(50),
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 25,
    marginTop: responsiveHeight(4),
    marginLeft: responsiveHeight(2.5),

  },
  internshipBox: {
    width: responsiveWidth(90),
    height: responsiveHeight(25),
    backgroundColor: "white",


  },
  lineView:{
    width:responsiveWidth(80),
    borderBottomWidth:1,
    opacity:0.3,
    marginTop:responsiveHeight(3)
  },
  applyNow:{
    width:responsiveWidth(28),
    height:responsiveHeight(4.5),
    backgroundColor:"red",
    marginTop:responsiveHeight(4),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:25,
    alignSelf:"flex-end",
    marginRight:responsiveHeight(2)

  },
});

export default Cart;
