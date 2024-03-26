import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 50,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 6,
    height: 150,
  },
  image: {
    width: 100,
    height: 100,
  },
});

const Gallery = () => {
  const photos = [
    { id: 1, source: require("../assets/favicon.png") },
    { id: 2, source: require("../assets/favicon.png") },
    { id: 3, source: require("../assets/favicon.png") },
    { id: 4, source: require("../assets/favicon.png") },
    { id: 5, source: require("../assets/favicon.png") },
    { id: 6, source: require("../assets/favicon.png") },
    { id: 7, source: require("../assets/favicon.png") },
    { id: 8, source: require("../assets/favicon.png") },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.column}>
            <Image source={item.source} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

export default Gallery;
