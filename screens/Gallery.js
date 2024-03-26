import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";

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
  const [isLoading, setLoading] = useState(true);
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/dmytrohrunytskyi/MobileLabs/master/data/galleryData.json"
        );
        const responseData = await response.json();
        setGalleryData(responseData);
      } catch (err) {
        Alert.alert("Error", "Couldn't get photos");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
          <Text style={{ marginTop: 15 }}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={galleryData}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.column}>
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
              </View>
            )}
          />
        </View>
      )}
    </>
  );
};

export default Gallery;
