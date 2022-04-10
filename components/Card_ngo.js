import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Card_ngo = ({ title, location, image }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={styles.img_container}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: image }}
        />
      </View>
      <View style={styles.txt_container}>
        <View>
          <Text>{title}</Text>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {location}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.push("EventsDetails", {
                title,
                location,
                image,
              })
            }
          >
            <Text
              style={{
                color: "tomato",
                paddingTop: 1,
                fontWeight: "900",
              }}
            >
              See Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    height: 200,
    // borderWidth: 0.5,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    marginLeft: 35,
    backgroundColor:'#fff'
  },
  img_container: {
    marginVertical: 10,
    width: "45%",
    height: "90%",
  },
  txt_container: {
    marginVertical: 15,
    width: "100%",
    flexShrink: 1,
    paddingLeft: 15,
    justifyContent: "space-evenly",
  },
});

export default Card_ngo;
