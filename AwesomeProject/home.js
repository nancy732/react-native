import { StyleSheet, Text, View } from "react-native";
import { AppRegistry, Image } from "react-native";
import Blink from "./blink";
import Signup from "./signup";
import { Actions } from "react-native-router-flux";
export default function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.signin}>
        <Image
          source={require("./assets/login.jpeg")}
          style={{ width: 193, height: 130 }}
        />
        <Blink text="Sign-In" />
      </View>
      <View>
        <Signup />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  signin: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  }
});
