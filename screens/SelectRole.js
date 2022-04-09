import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { useNavigation } from "@react-navigation/native";

const SelectRole = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.basketView}>
        <Image
          source={require("../assets/images/basket.png")}
          style={{
            width: 198.75,
            height: 132.75,
          }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text1}>Select your Role</Text>
        <Text style={styles.text2}>
          Choose your role to donate or to accept
        </Text>
      </View>
      <View style={styles.buttonsView1}>
        <TouchableOpacity
          activeOpacity={0}
          onPress={() => navigation.push("Location")}
        >
          <Image
            source={require("../assets/images/donate.png")}
            style={{
              width: 261,
              height: 72,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsView2}>
        <TouchableOpacity
          activeOpacity={0}
          onPress={() => navigation.push("Location")}
        >
          <Image
            source={require("../assets/images/ngo.png")}
            style={{
              width: 261,
              height: 72,
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonsView1: {
    flexDirection: "column",
    top: 250,
    alignItems: "center",
  },
  buttonsView2: {
    flexDirection: "column",
    top: 260,
    alignItems: "center",
  },
  basketView: {
    // flex: 1,
    flexDirection: "column",
    top: 200,
    alignItems: "center",
  },
  textView: {
    flexDirection: "column",
    height: 132.75,
    top: 285,
    alignItems: "center",
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 17,
    paddingTop: 5,
  },
});

export default SelectRole;
