import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: result.image_url }}
        resizeMode="cover"
        style={styles.img}
      />
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={styles.name}>{result.name}</Text>
        <Text style={{ marginBottom: 10 }}>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    marginLeft: 20,
    borderRadius: 18,
  },
  img: {
    width: 240,
    height: 150,
    borderRadius: 17,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
});
