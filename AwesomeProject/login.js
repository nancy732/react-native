import React, { useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Button
} from "react-native";
import axios from "axios";
export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [psw, setPSW] = useState();
  const [result, setResult] = useState(" ");
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const handlePress = () => {
    navigation.navigate("Signup");
  };
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: email,
      psw: psw
    };
    axios
      .post("http://192.168.100.211:8081/userRouter/users", user)
      .then(data => {
        setResult(data.data);

        if (data.data == "verify your email") {
          navigation.navigate("PPL");
        }
      })

      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/login.jpeg")}
        style={{ width: 193, height: 130 }}
      />
      <Text style={{ paddingBottom: 5, color: "red", textAlign: "center" }}>
        {result}
      </Text>
      <View style={{ position: "relative" }}>
        <Text
          style={{
            position: "absolute",
            top: 0,
            left: 20,
            zIndex: 1,
            backgroundColor: "white"
          }}
        >
          {first ? "" : "Email"}
        </Text>

        <TextInput
          style={styles.textArea}
          placeholder="email"
          name="email"
          onChangeText={text => {
            setEmail(text);
            setFirst(text === "");
          }}
        />
      </View>
      <View style={{ position: "relative" }}>
        <Text
          style={{
            position: "absolute",
            top: 0,
            left: 20,
            zIndex: 1,
            backgroundColor: "white"
          }}
        >
          {second ? "" : "Password"}
        </Text>

        <TextInput
          style={styles.textArea}
          placeholder="password"
          name="psw"
          onChangeText={text => {
            setPSW(text);
            setSecond(text === "");
          }}
          secureTextEntry={true}
        />
      </View>

      <Button onPress={handleSubmit} title="Login" />

      <Text
        style={{ color: "blue", margin: 7, textAlign: "center" }}
        onPress={handlePress}
      >
        Create My Account Now !
      </Text>
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
  textArea: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 250,
    fontSize: 20,
    borderColor: "gray",

    borderWidth: 2,
    padding: 5,
    margin: 10,
    borderRadius: 10
  }
});
