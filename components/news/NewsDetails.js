import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  newsDate: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },
  newsDescription: {
    fontSize: 16,
  },
});

const NewsDetails = ({ route }) => {
  const { title, date, description, imageUrl } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>{title}</Text>
        <Text style={styles.newsDate}>{date}</Text>
        <Text style={styles.newsDescription}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetails;
