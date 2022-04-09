import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import MyDonationCards from "../components/MyDonationCards";
import FocusedStatusBar from '../components/FocusedStatusBar';

const MyDonations = () => {
  return (
       <><FocusedStatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true} />
          <Text style={styles.heading}>My Donations</Text>
          <View style={styles.home_container}>
              <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                  <MyDonationCards
                      title="NGO NAME"
                      location="LOCATION"
                      date="9th April 2022"
                      image={require("../assets/logo.png")} />
                  <MyDonationCards
                      title="NGO NAME"
                      location="LOCATION"
                      date="9th April 2022"
                      image={require("../assets/logo.png")} />
                  <MyDonationCards
                      title="NGO NAME"
                      location="LOCATION"
                      date="9th April 2022"
                      image={require("../assets/logo.png")} />
                  <MyDonationCards
                      title="NGO NAME"
                      location="LOCATION"
                      date="9th April 2022"
                      image={require("../assets/logo.png")} />
              </ScrollView>
          </View></>
  )
}
const styles = StyleSheet.create({
  home_container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 20,
    flex: 1,
  },
  heading: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      fontWeight:'bold',
      fontSize:40, color:'#F95F5F',
      alignSelf:'center',
    
  }
});



export default MyDonations