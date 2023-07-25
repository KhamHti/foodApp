import {
  Button,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [results, setResults] = useState(null);
  const id = route?.params?.id;

  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    const gg = response.data;
    setResults(gg);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!results) {
    return null;
  }

  return (
    <SafeAreaView
      style={
        Platform.OS === "android" ? styles.androidContainer : styles.container
      }
    >
      <Text>{results.name}</Text>
      <FlatList
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image source={{ uri: item }} style={styles.img} />;
        }}
      />
    </SafeAreaView>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  androidContainer: {
    backgroundColor: "#fff",
    paddingTop: 50,
    flex: 1,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
});
