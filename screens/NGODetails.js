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
  SafeAreaView,
  Image,
} from "react-native";
import BackIcon from "../assets/back.png";
import PlaceholderImg from "../assets/placeholder.jpg";

import FocusedStatusBar from "../components/FocusedStatusBar";

function NGODetails() {
  return (
    <>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
          <Image source={PlaceholderImg} style={styles.image} />
          <View style={styles.inner_container}>
            <View style={styles.header}>
              <Link to={{ screen: "HomePage" }} style={styles.backBtn}>
                <Image source={BackIcon} />
                <Text style={{ fontSize: 14 }}>Back</Text>
              </Link>
              <Text style={{ fontSize: 24 }}>Name of The NGO</Text>
            </View>
            <View>
              <Text>Location</Text>
            </View>
            <View style={styles.whatdotheydo}>
              <Text>
                A non-governmental organization is an organization that
                generally is formed independent from government. They are
                typically nonprofit entities, and many of them are active in
                humanitarianism or the social sciences; they can also include
                clubs and associations that provide services to their members
                and others. NGO stands for non-governmental organization. While
                there is no universally agreed-upon definition of an NGO,
                typically it is a voluntary group or institution with a social
                mission, which operates independently from the government. NGOs
                or similar organizations exist in all parts of the world.
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ textAlign: "center", color: "white" }}>
                Contact
              </Text>
            </TouchableOpacity>
            <View>
              <Text style={{ textAlign: "center", paddingVertical: 10 }}>
                OR
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ textAlign: "center", color: "white" }}>
                Message
              </Text>
            </TouchableOpacity>
            {/* map */}
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    marginTop: 12,
    marginRight: 20,
  },
  image: {
    width: "100%",
    height: 300,
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
  header: {
    flexDirection: "row",
    paddingBottom: 25,
  },
  inner_container: {
    padding: 20,
  },
  whatdotheydo: {
    padding: 10,
  },
});

export default NGODetails;