import React, { useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Button
} from "react-native";
import axios from "axios";

export default function Signup({ navigation }) {
  const [Username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [psw, setPSW] = useState();
  const [repeat, setRepeat] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [result, setResult] = useState(" ");
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [four, setFour] = useState(true);
  const [five, setFive] = useState(true);

  const isEmailValid = () => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  };
  const handlePress = () => {
    navigation.navigate("Login");
  };
  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      Username: Username,
      email: email,
      psw: psw,
      repeat: repeat,
      PhoneNumber: PhoneNumber
    };

    if (
      Username == "" ||
      email == "" ||
      psw == "" ||
      repeat == "" ||
      PhoneNumber == ""
    ) {
      setResult("Required!");
    } else if (isEmailValid() == "") {
      setResult("Invalid Email");
    } else {
      axios
        .post("http://192.168.100.211:8081/userRouter/user", user)
        .then(data => {
          console.log("data signup", data.data);
          if (data.data == "enter valid Password") {
            setResult(data.data);
          } else if (data.data == "email already exist") {
            setResult(data.data);
          } else if (data.data == "successful") {
            navigation.navigate("Login");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/login.jpeg")}
        style={{ width: 193, height: 130 }}
      />
      <Text style={{ paddingBottom: 5, color: "red" }}>{result}</Text>
      <View style={{ position: "relative" }}>
        <Text
          style={{
            position: "absolute",
            top: -1,
            left: 20,
            zIndex: 1,
            backgroundColor: "white"
          }}
        >
          {first ? "" : "Username"}
        </Text>

        <TextInput
          style={styles.textArea}
          placeholder="Username"
          name="Username"
          onChangeText={text => {
            setUsername(text);
            setResult("");
            setFirst(text === "");
          }}
        />
      </View>
      <View style={{ position: "relative" }}>
        <Text
          style={{
            position: "absolute",
            top: -1,
            left: 20,
            zIndex: 1,
            backgroundColor: "white"
          }}
        >
          {second ? "" : "Email"}
        </Text>
        <TextInput
          style={styles.textArea}
          placeholder="email"
          name="email"
          onChangeText={text => {
            setEmail(text);
            setResult("");

            setSecond(text === "");
          }}
        />
      </View>
      <View style={{ position: "relative" }}>
        <Text
          style={{
            position: "absolute",
            top: -1,
            left: 20,
            zIndex: 1,
            backgroundColor: "white"
          }}
        >
          {third ? "" : "Password"}
        </Text>

        <TextInput
          style={styles.textArea}
          placeholder="password"
          name="psw"
          onChangeText={text => {
            setPSW(text);
            setResult("");

            setThird(text === "");
          }}
          secureTextEntry={true}
        />
      </View>
      <View style={{ position: "relative" }}>
        <Text
          style={{
            position: "absolute",
            top: -1,
            left: 20,
            zIndex: 1,
            backgroundColor: "white"
          }}
        >
          {four ? "" : "Confirm Password"}
        </Text>

        <TextInput
          style={styles.textArea}
          placeholder="Confirm"
          name="repeat"
          onChangeText={text => {
            setRepeat(text);
            setResult("");

            setFour(text === "");
          }}
          secureTextEntry={true}
        />
      </View>
      <View style={{ position: "relative" }}>
        <Text
          style={{
            position: "absolute",
            top: -1,
            left: 20,
            zIndex: 1,
            backgroundColor: "white"
          }}
        >
          {five ? "" : "Phone Number"}
        </Text>

        <TextInput
          style={styles.textArea}
          placeholder="Phone Number"
          name="PhoneNumber"
          onChangeText={text => {
            setPhoneNumber(text);
            setResult("");

            setFive(text === "");
          }}
        />
      </View>
      <Button onPress={handleSubmit} title="Submit" />
      <Text style={{ padding: 5, marginTop: 5, textAlign: "center" }}>
        Already have an account....
        <Text style={{ color: "blue", marginTop: 7 }} onPress={handlePress}>
          Login
        </Text>
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
    width: 270,
    fontSize: 20,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    margin: 5
  }
});
