import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Splash({navigation}) {
    useEffect(()=>{
        const timer=setTimeout(()=>{
          console.log("first")
            navigation.replace('First')
        },2000);
        return ()=> clearTimeout(timer)
    },[])
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Icon name='carrot' size={70} color={"white"} style={{transform:[{rotate:'40deg'}]}}></Icon>
      <Text style={styles.styl1}>Nectar</Text>
      </View>

      <Text style={styles.styl2}>online grocerial</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    flexDirection:"row"
  },
  image:{
    width:50,
    height:50,
    backgroundColor:"white"
  },
  styl1:{
    marginVertical:0,
    fontWeight:"bold",
    color:"white",
    fontSize:60
  },
  styl2:{
    marginVertical:0,
    color:"white",
    fontSize:15
  }
});
