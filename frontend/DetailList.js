import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  title: { fontWeight: "bold", fontSize: 18, marginBottom: 8 },
  content: { fontSize: 14 },
});

const DetailList = () => {
  const [details, setDetails] = useState([]);
  const address = "10.251.181.93";
  useEffect(() => {
    const test = () => {
      fetch(`http://${address}:8000/details`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setDetails(data))
        .catch((error) => console.error(error));
    };
    test();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={details}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => console.log(item)}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default DetailList;
