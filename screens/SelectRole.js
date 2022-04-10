import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../App";

const SelectRole = () => {
  const data = useContext(UserContext)
  const navigation = useNavigation()

  const handlePressDonate = () => {
    data.setUser(
      prevState => ({
        ...prevState,
        role: 'single_user',
      })
    )
    // data.setUsers([...data.users, data.user])
    console.log(data.user)
    navigation.push('UploadProfileImage')
  }

  const handlePressNgo = () => {
    data.setUser(
      prevState => ({
        ...prevState,
        role: 'ngo',
        isNgo: true
      })
    )
    // data.setUsers([...data.users, data.user])
    console.log(data.user)
    navigation.push('NgoHomePage')
  }
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
          onPress={handlePressDonate}
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
          onPress={handlePressNgo}
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
