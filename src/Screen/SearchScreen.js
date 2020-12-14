import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../Components/searchBar";
import useResult from "../Hooks/useResults";
import ResultList from "../Components/resultList";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [result, searchApi, error] = useResult();

  const filterResultByPrice = (price) => {
    return result.filter((result) => {
      return result.price == price;
    });
  };

  return (
    <View style={styles.background}>
      <SearchBar
        search_value={search}
        searchItem={setSearch}
        submitSearchItem={() => searchApi(search)}
      />
      {error ? <Text>{error}</Text> : null}

      <ScrollView>
        <ResultList results={filterResultByPrice("$")} title="Cost Effective" />
        <ResultList results={filterResultByPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterResultByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});
