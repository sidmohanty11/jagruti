import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  Image,
} from "react-native";
import CheckBox from "react-native-check-box";
import * as ImagePicker from "expo-image-picker";
import UploadIcon from "../assets/upload.png";
import CameraIcon from "../assets/camera.png"
import BackIcon from "../assets/back.png";

import FocusedStatusBar from "../components/FocusedStatusBar";
import { Link } from "@react-navigation/native";

function DonateForm() {
  const [isSelected, setIsSelected] = useState();
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
    const launchCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  

  return (
    <>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.inner_container}>
            <View style={styles.header}>
              <Link to={{ screen: "HomePage" }} style={styles.backBtn}>
                <Image source={BackIcon} />
                <Text style={{ fontSize: 14 }}>  Back</Text>
              </Link>
              <Text style={{ fontSize: 24 }}>Donation Detail</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:'space-around'}}>
              <TouchableOpacity
                style={styles.uploadImage_container}
                onPress={pickImage}
              >
                <Image source={UploadIcon} />
                <Text style={{ fontSize: 11 }}>Upload Product Image</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.openCamera_container}
                onPress={launchCamera}
              >
                <Image source={CameraIcon} />
                <Text style={{ fontSize: 11, top:12 }}>Capture Product Image</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.input_container}>
              <TextInput
                placeholder="Description"
                style={styles.input}
                multiline={true}
                numberOfLines={4}
              />
            </View>
            <View>
              <CheckBox
                style={styles.checkbox}
                onClick={() => {
                  setIsSelected((prev) => !prev);
                }}
                isChecked={isSelected}
                rightText="I agree with Terms & Conditions"
              />
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ textAlign: "center", color: "white" }}>
                Confirm Donation
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  backBtn: {
    marginTop: 12,
    marginRight: 20,
  },
  header: {
    flexDirection: "row",
    paddingBottom: 25,
  },
  inner_container: {
    padding: 20,
  },
  uploadImage_container: {
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: "rgba(52, 53, 55, 0.34)",
    borderRadius: 1,
    padding: 10,
  },
  openCamera_container: {
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: "rgba(52, 53, 55, 0.34)",
    borderRadius: 1,
    padding: 12,
  },
  input: {
    height: 100,
    textAlignVertical: "top",
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    padding: 10,
    marginTop: 40,
  },
  input_container: {
    width: "80%",
  },
  checkbox: {
    padding: 30,
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
});

export default DonateForm;
