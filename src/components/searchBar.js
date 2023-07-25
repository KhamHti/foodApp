import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Icon from "@expo/vector-icons/Feather";
  import Toast from "react-native-toast-message";
  
  const SearchBar = ({ onPress, term, onTermChange, onSubmit }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="search" style={styles.iconStyle} />
        </TouchableOpacity>
        <TextInput
          style={styles.text}
          placeholder="SearchBar"
          placeholderTextColor={"grey"}
          value={term}
          onChangeText={onTermChange}
          autoCapitalize="none"
          autoCorrect={false}
          onEndEditing={onSubmit}
        />
      </View>
    );
  };
  
  export default SearchBar;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f0eeee",
      height: 50,
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 10,
    },
    text: {
      fontSize: 16,
      marginLeft: 10,
      color: "#000",
      marginHorizontal: 30,
    },
    iconStyle: {
      fontSize: 26,
      marginLeft: 10,
      alignSelf: "center",
    },
  });
  