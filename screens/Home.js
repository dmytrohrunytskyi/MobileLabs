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
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  newsDate: {
    fontSize: 12,
    color: "#888",
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 20,
  },
});

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/dmytrohrunytskyi/MobileLabs/master/data/newsData.json"
        );
        const responseData = await response.json();
        setNewsData(responseData);
      } catch (err) {
        Alert.alert("Error", "Couldn't get news");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
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
        <FlatList
          contentContainerStyle={styles.container}
          data={newsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View style={styles.newsContent}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDate}>{item.date}</Text>
                <Text style={styles.newsDescription}>{item.description}</Text>
              </View>
            </View>
          )}
          ListHeaderComponent={<Text style={styles.title}>News</Text>}
        />
      )}
    </>
  );
};

export default Home;
