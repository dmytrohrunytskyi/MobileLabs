import { Text, View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
  },
  text: {
    textAlign: "center",
    fontStyle: "italic",
  },
});

const Footer = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Груницький Дмитро Сергійович, ІПЗ-20-3</Text>
      </View>
    </>
  );
};

export default Footer;
