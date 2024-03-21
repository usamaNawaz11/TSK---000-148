import * as React from 'react';
import {
  View,
  StyleSheet,
} from "react-native";

import Bottom_stack_top from './Navigation/Bottom_stack_top';
import Internee from './Navigation/Internee';


function App() {
  return (
    <View style={styles.container} >
      <Internee/>
            </View>
    
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1
  }

})

export default App;