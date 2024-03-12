import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from "react-native";

const Cart = ({ route }) => {
  const { cartItems, setCartItems } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemText}>{item.name}</Text>
      <Text style={styles.cartItemText}>Quantity: 1</Text>
      <Text style={styles.cartItemText}>Price: ${item.price}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveFromCart(item)}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
  const handleRemoveFromCart = (item) => {
    // Filter out the item from cartItems
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
  
    // Update the state using setCartItems
    setCartItems(updatedCartItems);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: responsiveHeight(2) }}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(2),
    paddingTop: responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    marginBottom: responsiveHeight(2),
  },
  cartItem: {
    backgroundColor: "#fff",
    padding: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  cartItemText: {
    fontSize: responsiveFontSize(1.8),
    marginBottom: responsiveHeight(0.5),
  },
  emptyCartText: {
    fontSize: responsiveFontSize(2),
    textAlign: "center",
    marginTop: responsiveHeight(5),
  },
});

export default Cart;
