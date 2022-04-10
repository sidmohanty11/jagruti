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
  ScrollView,
} from "react-native";
import BackIcon from "../assets/back.png";
import PlaceholderImg from "../assets/placeholder.jpg";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";

import FocusedStatusBar from "../components/FocusedStatusBar";

function EventsDetails({ route }) {
  const data = route.params;
  return (
    <>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
          <ScrollView>
          <Image source={{ uri: data.image }} style={styles.image} />
          <View style={styles.inner_container}>
            <View style={styles.header}>
              <Link to={{ screen: "HomePage" }} style={styles.backBtn}>
                <Image source={BackIcon} />
                <Text style={{ fontSize: 14 }}>Back</Text>
              </Link>
              <Text style={{ fontSize: 24 }}>{data.title}</Text>
            </View>
            <View>
              <Text>{data.location}</Text>
            </View>
            <View style={styles.whatdotheydo}>
              <Text>There is an event {data.location}. Please join us!</Text>
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
          </View>
          <View style={styles.container}> 
              <MapView style={styles.map} />
             </View> 
             </ScrollView>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    //width: Dimensions.get("window").width,
    //height: Dimensions.get("window").height,
    width:400,
    height:600,
    padding:20,
  },
});

export default EventsDetails;
