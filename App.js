import * as React from 'react';
import {
  View,
  StyleSheet,
} from "react-native";

import Bottom_stack_top from './Navigation/Bottom_stack_top';
import Internee from './Navigation/Internee';
import { Provider } from 'react-redux';
import Store from './Reduxtoolkit/Store';


function App() {
  return (
    <View style={styles.container} >
      <Provider store={Store}>
      <Internee/>
      </Provider>
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