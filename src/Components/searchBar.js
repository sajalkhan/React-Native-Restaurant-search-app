import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ search_value, searchItem, submitSearchItem }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" color="black" />
      <TextInput
        value={search_value}
        autoCorrect={false}
        onChangeText={searchItem}
        onEndEditing={submitSearchItem}
        style={styles.input}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 6,
    marginHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
