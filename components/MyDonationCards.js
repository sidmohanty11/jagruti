import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const MyDonationCards = ({ title, location, date, image }) => {
  return (
    <View style={styles.card_container}>
      <Image source={image} style={styles.img} />
      <View style={styles.details_container}>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.donated}>Donated</Text>
          <Image source={require('../assets/images/tick.png')} style={styles.circularTick} />
        </View>
      <View style={styles.infoContainer} >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
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
  infoContainer: {
    paddingLeft: 3,
    flexDirection:'column',
    justifyContent:'flex-start',
  },
  title: {
    marginBottom: 1,
    fontWeight: "bold",
    color:'#98A2B3'
  },
  location: {
    marginBottom: 1,
    fontWeight: "bold",
    color:'#98A2B3'
  },
  date: {
    marginBottom: 1,
    fontWeight: "bold",
    color:'#98A2B3',
    fontSize:18,
  },
  donated: {
    fontWeight: "bold",
    fontSize: 30.5,
    color:'#46CD30',
  },
  circularTick: {
    height: 45.25,
    width: 45.25,
    alignSelf:'flex-end',

  },
});

export default MyDonationCards;
