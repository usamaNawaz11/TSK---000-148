import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 
import { db } from "../Firebase/firebase.config";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const List = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = onSnapshot(collection(db, 'user'), (querySnapshot) => {
      const fetchedUsers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(fetchedUsers);
      setLoading(false);
    });

    return () => data();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteDoc(doc(db, 'user', userId));
      // Remove the deleted user from the state
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEdit = (user) => {
    // Implement the navigation to the edit screen or show a modal for editing
    navigation.navigate('task', { user });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {users.map(user => (
          <View key={user.id} style={styles.row}>
            <Text style={styles.txt11}>{`Name: ${user.name}`}</Text>
            <View style={styles.txt1}>
              <Text style={{ fontSize: responsiveFontSize(2) }}>{`Task: ${user.task}`}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEdit(user)} // Pass the user object to handleEdit
              >
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(user.id)}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:responsiveHeight(10)
  },
  row: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt11: {
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(2),
  },
  txt1: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: responsiveWidth(60),
    marginRight: responsiveWidth(5),
  },
  actions: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: 'lightblue',
    padding: 8,
    borderRadius: 5,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: 'lightcoral',
    padding: 8,
    borderRadius: 5,
  },
});

export default List;
