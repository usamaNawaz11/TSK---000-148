// VerticalListScreen.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

const VerticalListScreen = ({ route }) => {
  const { products } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.verticalItem}>
      <View style={styles.itemContainer}>
        <Image style={styles.subimage} source={item.image} />
        <Text style={styles.subtext}>{item.name}</Text>
        <Text style={styles.subsubtext}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <TouchableOpacity style={styles.priceButton}>
            <Icon name="add" size={25} style={styles.addButton}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.txtt}>Best Selling</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={2} // Set the number of columns to 2
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
  },
  txtt:{
    alignSelf: "center",
    marginTop:responsiveHeight(6),
    fontSize:responsiveFontSize(3),
    fontWeight:"bold"

  },
  verticalItem: {
    flex: 1,
    margin: responsiveWidth(2),
  },
  itemContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop:responsiveHeight(2)
  },
  subtext: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    marginTop: responsiveHeight(1),
    marginLeft: responsiveHeight(1),

  },
  priceContainer: {
    flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: responsiveHeight(1),
        marginRight: responsiveHeight(1),
  },
  price: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    marginBottom:responsiveHeight(2),
    marginRight: responsiveHeight(3),

  },
  priceButton: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    backgroundColor: 'green',
    borderRadius: 5,
    marginLeft: responsiveHeight(1),
    marginBottom:responsiveHeight(2),
   
  },
  addButton: {
    color: 'white',
  },
  subsubtext: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: '100',
    marginTop: responsiveHeight(0.5),
  },
  subimage: {
    height: responsiveHeight(10),
    width: responsiveWidth(40),
    borderRadius: 15,
  },
};

export default VerticalListScreen;