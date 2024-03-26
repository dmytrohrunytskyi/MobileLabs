import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";

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
  const newsData = [
    {
      id: 1,
      imageUrl: require("../assets/favicon.png"),
      title: "Sample News Title 1",
      date: "March 26, 2024",
      description: "Short description of the news article 1.",
    },
    {
      id: 2,
      imageUrl: require("../assets/favicon.png"),
      title: "Sample News Title 2",
      date: "March 27, 2024",
      description: "Short description of the news article 2.",
    },
    {
      id: 3,
      imageUrl: require("../assets/favicon.png"),
      title: "Sample News Title 3",
      date: "March 27, 2024",
      description: "Short description of the news article 3.",
    },
    {
      id: 4,
      imageUrl: require("../assets/favicon.png"),
      title: "Sample News Title 4",
      date: "March 27, 2024",
      description: "Short description of the news article 4.",
    },
    {
      id: 5,
      imageUrl: require("../assets/favicon.png"),
      title: "Sample News Title 5",
      date: "March 27, 2024",
      description: "Short description of the news article 5.",
    },
    {
      id: 6,
      imageUrl: require("../assets/favicon.png"),
      title: "Sample News Title 6",
      date: "March 27, 2024",
      description: "Short description of the news article 6.",
    },
    {
      id: 7,
      imageUrl: require("../assets/favicon.png"),
      title: "Sample News Title 7",
      date: "March 27, 2024",
      description: "Short description of the news article 7.",
    },
    {
      id: 8,
      imageUrl: require("../assets/favicon.png"),
      title: "Sample News Title 8",
      date: "March 27, 2024",
      description: "Short description of the news article 8.",
    },
  ];

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={newsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.imageUrl} style={styles.image} />
          <View style={styles.newsContent}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDate}>{item.date}</Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
          </View>
        </View>
      )}
      ListHeaderComponent={<Text style={styles.title}>News</Text>}
    />
  );
};

export default Home;
