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
import CameraIcon from "../assets/camera.png";
import BackIcon from "../assets/back.png";

import FocusedStatusBar from "../components/FocusedStatusBar";
import { Link } from "@react-navigation/native";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

function DonateForm() {
  const [isSelected, setIsSelected] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // console.log("Opening cameraaaaaaaaaaaaaaaaaaaaaa.......................")
      const storage = getStorage();  // the storage
      const ref_con = ref(storage, result.name) // how image is addresed inside storage

      const img = await fetch(result.uri) // get the image as string
      const bytes = await img.blob() // convert string to bytes
      await uploadBytes(ref_con, bytes)
      getDownloadURL(ref_con).then(res => {
        setImage(res)
      })
    }
  };


  const launchCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      // console.log("Opening cameraaaaaaaaaaaaaaaaaaaaaa.......................")
      const storage = getStorage();  // the storage
      const ref_con = ref(storage, result.name) // how image is addresed inside storage

      const img = await fetch(result.uri) // get the image as string
      const bytes = await img.blob() // convert string to bytes
      await uploadBytes(ref_con, bytes)
      getDownloadURL(ref_con).then(res => console.log(res))
    }
  };

  const confirmDonation = async () => {
    console.log(description);
    console.log(image);
    if (isSelected) {
      try {
        const docRef = await addDoc(collection(db, "donations"), {
          image,
          description,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
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
                <Text style={{ fontSize: 14 }}> Back</Text>
              </Link>
              <Text style={{ fontSize: 24 }}>Donation Detail</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
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
                <Text style={{ fontSize: 11, top: 12 }}>
                  Capture Product Image
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.input_container}>
              <TextInput
                placeholder="Description"
                style={styles.input}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setDescription(text)}
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
            <TouchableOpacity style={styles.btn} onPress={confirmDonation}>
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
