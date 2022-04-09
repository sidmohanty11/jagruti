import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Card from "../components/Card";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "@react-navigation/native";
import User from "../components/User";

const HomePage = () => {
  return (
    <>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <User />
      <View style={styles.home_container}>

        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_donate}>
            <Text
              style={{ color: "#ff6347", textAlign: "center", fontSize: 20 }}
            >
              <Link to={{ screen: "DonateForm" }}>Donate</Link>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_home}>
            <Text
              style={{ color: "#fff", textAlign: "center", fontSize: 20 }}
            >
              <Link to={{ screen: "Home" }}>Home</Link>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_events}>
            <Text style={{ color: "#ff6347", textAlign: "center", fontSize: 20 }}>
              <Link to={{ screen: "Events" }}>Event</Link>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.text_box}>
          <AntDesign name="home" size={32} color="green" />
          <Text style={styles.txt}>Ngo's near me</Text>
        </View>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Card
            title="NGO NAME"
            location="NGO LOCATION"
            image={require("../assets/logo.png")}
          />
          <Card
            title="NGO NAME"
            location="NGO LOCATION"
            image={require("../assets/logo.png")}
          />
          <Card
            title="NGO NAME"
            location="NGO LOCATION"
            image={require("../assets/logo.png")}
          />
          <Card
            title="NGO NAME"
            location="NGO LOCATION"
            image={require("../assets/logo.png")}
          />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  home_container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 0,
    flex: 1,
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  btn_donate: {
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  btn_home: {
    borderRadius: 12,
    backgroundColor: "#ff6347",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  btn_events: {
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 30,

  },
  txt: {
    color: "#525252",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
    marginVertical: 15,
    paddingLeft: 15,
  },
  text_box: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
export default HomePage;
