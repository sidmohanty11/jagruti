import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";
import { UserContext } from "../App";
import * as LocationGPS from "expo-location";

const Location = ({ onSearch }) => {
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const handleLocation = () => {
    setUser((prevState) => ({ ...prevState, location }));
    navigation.push("HomePage");
  };

  useEffect(() => {
    (async () => {
      let { status } = await LocationGPS.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await LocationGPS.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);

  return (
    <>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.textView1}>
        <Text style={styles.text1}>Share Location</Text>
      </View>
      <View style={styles.searchbarView}>
        <View style={styles.searchbar}>
          <Image
            source={require("../assets/images/search.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 20, marginLeft: 20 }}
          />
          <TextInput
            placeholder="Search for your location"
            style={{ flex: 1, textDecorationColor: "#98A2B3", fontSize: 18 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
      <View style={styles.textView2}>
        <Text style={styles.text2}>Or</Text>
      </View>
      <View style={styles.textView3}>
        <TouchableOpacity>
          <Text style={styles.text3}>
            Connect with GPS while using this app
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn} onPress={handleLocation}>
          <Text style={{ color: "white", textAlign: "center" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textView1: {
    flexDirection: "column",
    alignItems: "center",
    top: 251,
  },
  textView2: {
    flexDirection: "column",
    alignItems: "center",
    top: 311,
  },
  textView3: {
    flexDirection: "column",
    alignItems: "center",
    top: 321,
  },
  text1: {
    fontSize: 34,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 18,
    fontWeight: "700",
    color: "#98A2B3",
  },
  text3: {
    fontSize: 18,
    fontWeight: "700",
    color: "#98A2B3",
  },
  searchbar: {
    width: "90%",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  searchbarView: {
    top: 300,
    flexDirection: "column",
    alignItems: "center",
  },
  btn_container: {
    width: "100%",
    top: 350,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    width: 323.75,
    height: 52,
  },
});

export default Location;
