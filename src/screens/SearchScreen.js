import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchBar";
import yelp from "../api/yelp";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import useResults from "../hooks/useResults";
import ResultLists from "../components/resultLists";
import { StatusBar } from "expo-status-bar";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [SearchApi, results, setResults, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <SafeAreaView
      style={
        Platform.OS === "android" ? styles.androidContainer : styles.container
      }
    >
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onSubmit={() => SearchApi(term)}
      />
      {errorMessage ? (
        <Text style={{ color: "red", fontSize: 15 }}>{errorMessage}</Text>
      ) : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 20 }}>
          <ResultLists
            result={filterResultsByPrice("$")}
            title={"Cost Effective $"}
            navigation={navigation}
          />
          <ResultLists
            result={filterResultsByPrice("$$")}
            title={"Bit Pricer $$"}
            navigation={navigation}
          />
          <ResultLists
            result={filterResultsByPrice("$$$")}
            title={"Big Spender $$$"}
            navigation={navigation}
          />
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  androidContainer: {
    backgroundColor: "#fff",
    paddingTop: 50,
    flex: 1,
  },
});
