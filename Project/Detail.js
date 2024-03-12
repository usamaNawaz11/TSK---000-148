// Detail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Detail = ({ route }) => {
  const { article } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={{fontWeight:"bold", fontSize:20}}>{article.author}</Text>
      <Text>{article.content}</Text>
      <Text>{article.description}</Text>
      <Text>{article.url}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Detail;