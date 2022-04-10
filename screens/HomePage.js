import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import Card from "../components/Card";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import User from "../components/User";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const HomePage = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      let result = [];
      const querySnapshot = await getDocs(collection(db, "ngos"));
      querySnapshot.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      setData(result);
    }
    getData();
  }, []);

  return (
    <>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <User />
      <View style={styles.home_container}>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_donate}>
            <Text
              style={{ color: "#ff6347", textAlign: "center", fontSize: 20 }}
            >
              <Link to={{ screen: "DonateForm" }}>Donate</Link>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_home}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
              <Link to={{ screen: "Home" }}>Home</Link>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_events}>
            <Text
              style={{ color: "#ff6347", textAlign: "center", fontSize: 20 }}
            >
              <Link to={{ screen: "Events" }}>Event</Link>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.text_box}>
          <AntDesign name="home" size={32} color="green" />
          <Text style={styles.txt}>Ngo's near me</Text>
        </View>
        {/* <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}> */}
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              location={item.location}
              image={item.image}
            />
          )}
        />
        {/* </ScrollView> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  home_container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 0,
    flex: 1,
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  btn_donate: {
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  btn_home: {
    borderRadius: 12,
    backgroundColor: "#ff6347",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  btn_events: {
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  txt: {
    color: "#525252",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
    marginVertical: 15,
    paddingLeft: 15,
  },
  text_box: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
export default HomePage;
