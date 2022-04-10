import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UploadIcon from "../assets/upload.png";
import CameraIcon from "../assets/camera.png"
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
function UploadProfileImage() {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState();
  const [image, setImage] = useState(null);

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
      getDownloadURL(ref_con).then(res => console.log(res))
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
      getDownloadURL(ref_con).then(res => {
        console.log(res)

      })
    }

  };


  return (
    <>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{ flexDirection: "column", justifyContent: 'center' }}>
        <Text style={styles.heading}>Give a Profile Image</Text>
        <View style={{ flexDirection: "row", justifyContent: 'space-around', top: 250 }}>
          <TouchableOpacity
            style={styles.uploadImage_container}
            onPress={pickImage}
          >
            <Image source={UploadIcon} />
            <Text style={{ fontSize: 11 }}>Upload Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.openCamera_container}
            onPress={launchCamera}
          >
            <Image source={CameraIcon} />
            <Text style={{ fontSize: 11, top: 12 }}>Capture Image</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push("Location")}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({

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
  btn_container: {
    width: "100%",
    top: 300,
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
  heading: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    fontWeight: 'bold',
    fontSize: 30, color: '#000',
    alignSelf: 'center',
    top: 200,

  }
});

export default UploadProfileImage;
