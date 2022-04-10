import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import Card_ngo from "../components/Card_ngo";

const Events = () => {
  //   const data = [
  //     {
  //       title: "title",
  //       image: "image",
  //       description: "desc",
  //       id: 1,
  //       location: "location",
  //     },
  //   ];
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      let result = [];
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      setData(result);
    }
    getData();
  }, []);

  return (
    <>
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          style={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.slide_container}>
            <Text style={styles.txt}>Events near you...</Text>
          </View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={({ item }) => (
              <Card_ngo
                title={item.title}
                location={item.location}
                image={item.image}
              />
            )}
          />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  slide_container: {
    alignItems: "center",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#535353",
    marginBottom: 40,
  },
});
export default Events;
