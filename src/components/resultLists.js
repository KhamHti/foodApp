import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ResultsDetail from "./ResultsDetail";

const ResultLists = ({ title, result, navigation }) => {
  
  if (!result.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={{
          color: "grey",
          fontWeight: "bold",
          fontSize: 16,
          marginBottom: 10,
          marginLeft: 17,
        }}
      >
        Results : {result.length}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ResultLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "skyblue",
    borderStyle: "solid",
    margin: 10,
    paddingBottom: 6,
    borderRadius: 8,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 15,
    marginTop: 10,
  },
});
