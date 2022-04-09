import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Card = ({ title, location, image }) => {
  return (
    <View style={styles.card_container}>
      <Image source={image} style={styles.img} />
      <View style={styles.details_container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 200,
  },
  details_container: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  location: {
    fontWeight: "bold",
  },
});

export default Card;
