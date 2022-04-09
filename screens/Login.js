import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app, { auth } from '../firebase-config'

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // console.log('signed in')
        const user = userCredentials.user
        // console.log(user)
        navigation.push('HomePage')
      })
      .catch((error) => {
        console.log(error)
        Alert.alert(error.message)
      })
  }

  return (
    <>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.text_container}>
            <Text style={styles.text}>LOG IN</Text>
          </View>
          <View style={styles.input_container}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email-id"
              style={styles.input} />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              style={styles.input} />
          </View>
          <View style={styles.btn_container}>
            <TouchableOpacity
              style={styles.btn}
              onPress={handleSignIn}
            >
              <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.new_txt}>
              New Member?
              <Text style={styles.bold_txt}>
                <Link to={{ screen: "Signup" }}>Sign up</Link>
              </Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  btn_container: {
    width: "80%",
    // backgroundColor: 'yellow',
    marginTop: 40,
  },
  new_txt: {
    color: "#c0c0c0",
    textAlign: "center",
    paddingTop: 10,
  },
  bold_txt: {
    color: "#a9a9a9",
  },
  btn: {
    borderRadius: 12,
    backgroundColor: "#F95F5F",
    paddingVertical: 10,
    paddingHorizontal: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: 52,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    padding: 10,
    marginTop: 40,
  },
  input_container: {
    width: "80%",
  },
  text: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
  },
  text_container: {
    width: "80%",
    marginBottom: 40,
  },
});

export default Login;
