import { Text, View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 17,
  },
  image: {
    width: 150,
    height: 50,
  },
  title: {
    fontSize: 20,
    marginTop: 12,
  },
});

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/logo_ztu.png")}
          resizeMode="contain"
        />
        <Text style={styles.title}>FirstMobileApp</Text>
      </View>
    </>
  );
};

export default Header;
