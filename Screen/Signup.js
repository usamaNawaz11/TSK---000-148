import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { auth } from "../Firebase/Firebase.config";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";


const Signup = ({ navigation }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const Loginbut = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate("home")
        // ...
      })
      .catch((error) => {
        alert("Incorrect Email/password")
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainbox}>
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(1) }}>
          <Image style={styles.logoimage}
            source={require("../assets/interneelogo.jpeg")} />
          <View style={{ flexDirection: "row", marginLeft: responsiveHeight(1) }}>
            <Text style={styles.greenname}>Internee</Text>
            <Text style={styles.blackname}>.Pk</Text>

          </View>

        </View>
        <View
          style={{ flexDirection: "column", marginLeft: responsiveHeight(9), marginTop: responsiveHeight(-2) }}
        >
          <Text style={styles.purplename}>VIRTUAL INTERNSHIP PLATFORM</Text>
        </View>
        <View style={styles.loginBox}>
          <View style={styles.emailView}>
            <TextInput
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />

            <Ionicons name="mail" size={20} />
          </View>
          <View style={styles.passwordView}>
            <TextInput
              secureTextEntry={passwordVisible}

              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.checkBox}>
            <TouchableOpacity onPress={toggleCheckbox} style={{ flexDirection: 'row' }}>
              <Ionicons name={checked ? 'checkbox-outline' : 'square-outline'} size={20} color="green" />
            </TouchableOpacity>
            <Text style={[styles.text, { marginLeft: responsiveHeight(1) }]}>Remember me</Text>
            <TouchableOpacity
              style={styles.sigin}
              onPress={() => Loginbut()}>
              <Text style={[styles.text, { textAlign: "center", marginTop: responsiveHeight(0.5), color: "white" }]}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{ marginTop: responsiveHeight(1), color: "green" }}
            >
              Forgot Password?
            </Text>
          </View>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  mainbox: {
    marginTop: responsiveHeight(20),
    width: responsiveWidth(80),
    height: responsiveHeight(35),
    fontSize: responsiveFontSize(2),
    backgroundColor: "white",
    borderWidth: 1,
    alignItems: "center"
  },
  loginBox: {
    width: responsiveWidth(80),
    height: responsiveHeight(24),
    fontSize: responsiveFontSize(2),
    backgroundColor: "white",
    borderWidth: 1,
    marginTop: responsiveHeight(8),
    alignItems: "center"
  },
  checkBox: {
    flexDirection: "row",
    marginTop: responsiveHeight(2)

  },
  logoimage: {
    width: responsiveWidth(10),
    height: responsiveHeight(5)
  },
  sigin: {
    width: responsiveWidth(20),
    height: responsiveHeight(3.5),
    backgroundColor: "green",
    color: "white",
    marginLeft: responsiveHeight(9),
    borderRadius: 10
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: "bold"

  },
  greenname: {
    marginTop: responsiveHeight(0.6),
    fontSize: responsiveFontSize(2.5),
    color: "green",
    fontWeight: "bold"
  },
  blackname: {
    marginTop: responsiveHeight(0.6),
    fontSize: responsiveFontSize(2.5),
    color: "black",
    fontWeight: "bold"
  },
  purplename: {
    marginTop: responsiveHeight(0.6),
    fontSize: responsiveFontSize(1),
    color: "purple",
    fontWeight: "bold"
  },
  emailView: {
    width: responsiveWidth(70),
    height: responsiveHeight(4),
    borderWidth: 0.2,
    marginTop: responsiveHeight(2),
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  passwordView: {
    width: responsiveWidth(70),
    height: responsiveHeight(4),
    borderWidth: 0.2,
    marginTop: responsiveHeight(2),
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row"
  },
});

export default Signup;
