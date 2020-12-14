import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function resultDetails({ result }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.textStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 150,
    width: 250,
    borderRadius: 5,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
