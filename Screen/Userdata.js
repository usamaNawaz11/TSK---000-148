import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const Userdata = ({ navigation }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const get = await response.json();
      console.log(get);
      setData(get.results);
    } catch (error) {
      console.error("error");
    }
  };
  const renderData = ({ item }) => (
    <View style={styles.renderData}>
        <View 
        style={{flexDirection:"row",
    justifyContent:"space-around"}}
        >
            <Text>{item.name.first} {item.name.last}</Text>
            <Text>{item.cell} </Text>
            <Text>{item.location.country} </Text>


        </View>
        



    </View>
  );
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
        <View 
        style={{flexDirection:"row" , justifyContent:"space-around",    marginTop:responsiveHeight(2),
        backgroundColor:"#D3D3D3"
    }}
        >
            <Text style={{fontWeight:"bold"}}>Name</Text>
            <Text style={{fontWeight:"bold"}}>Phone Number</Text>
            <Text style={{fontWeight:"bold"}}>Country</Text>


        </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderData}
          keyExtractor={(item, index) => index.toString()}
        >
            
        </FlatList>
      ) : (
        <Text
        style={styles.loading}
        >Loading...</Text>
      )}
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  renderData:{
    backgroundColor:"white",
    padding: 20, 
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginLeft:responsiveHeight(-4)


  },
  loading:{
    justifyContent:"center",
    textAlign:"center",
    fontSize:responsiveFontSize(2)
  }
});
export default Userdata;