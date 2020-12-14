import React, { useState, useEffect } from "react";
import { View, Image, FlatList, StyleSheet } from "react-native";

import yelp from "../Api/yelp";

export default function resultShow({ route }) {
  const { id } = route.params;

  const [result, setResult] = useState(null);

  const getRestaurants = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurants(id);
  }, []);

  if (!result) return null;
  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Image style={styles.image_style} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image_style: {
    height: 200,
    width: 200,
    borderRadius: 5,
    margin: 20,
  },
});
