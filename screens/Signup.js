import { Link } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../components/FocusedStatusBar";

function Signup() {
  const navigation = useNavigation();
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
            <Text style={styles.text}>SIGN UP</Text>
          </View>
          <View style={styles.input_container}>
            <TextInput placeholder="Name" style={styles.input} />
            <TextInput placeholder="Email-id" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} />
            <TextInput placeholder="Phone no." style={styles.input} />
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
              style={styles.btn}
              onPress={() => navigation.push("SelectRole")}
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
