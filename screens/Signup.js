import { Link } from "@react-navigation/native";
import React, { useState, useContext } from "react";
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
import { auth } from '../firebase-config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../App'

function Signup() {
  const navigation = useNavigation();

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const data = useContext(UserContext)

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, data.user.email, data.user.password)
      .then((userCredentials) => {
        const user = userCredentials.user
        data.setUsers([...data.users, data.user])
        navigation.push("SelectRole")
      })
      .catch((err) => {
        console.log(err)
        Alert.alert(err.message)
      })
  }

  return (
    <>
      {/* {console.log(data.user)} */}
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.text_container}>
            <Text style={styles.text}>SIGN UP</Text>
          </View>
          <View style={styles.input_container}>
            <TextInput
              value={data.user.name}
              onChangeText={(text) => data.setUser(
                prevState => ({
                  ...prevState,
                  name: text
                })
              )}
              placeholder="Name" style={styles.input} />
            <TextInput
              value={data.user.email}
              onChangeText={(text) => data.setUser(
                prevState => ({
                  ...prevState,
                  email: text
                })
              )}
              placeholder="Email-id" style={styles.input} />
            <TextInput
              value={data.user.password}
              onChangeText={(text) => data.setUser(
                prevState => ({
                  ...prevState,
                  password: text
                })
              )}
              placeholder="Password" style={styles.input} />
            <TextInput
              value={data.user.phone}
              onChangeText={(text) => data.setUser(
                prevState => ({
                  ...prevState,
                  phone: text
                })
              )}
              placeholder="Phone no." style={styles.input} />
          </View>
          <View>
            <Text style={{ textAlign: "center", marginTop: 15 }}>Or</Text>
            <View style={styles.btn_container}>
              <TouchableOpacity style={styles.btn}>
                <Text style={{ color: "white", textAlign: "center" }}>
                  Signup with Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btn_container}>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={styles.btn}
            // onPress={() => navigation.push("SelectRole")}
            >
              <Text style={{ color: "white", textAlign: "center" }}>Next</Text>
            </TouchableOpacity>
            <Text style={styles.new_txt}>
              Already have an account?
              <Text style={styles.bold_txt}>
                {" "}
                <Link to={{ screen: "Login" }}>Login</Link>
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
  new_txt: {
    color: "#c0c0c0",
    textAlign: "center",
    paddingTop: 10,
  },
  bold_txt: {
    color: "#a9a9a9",
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

export default Signup;
