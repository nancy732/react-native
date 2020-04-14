import NavigationBar from "react-native-navbar";
import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
const styles = {
  container: {
    flex: 1
  },
  container1: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  container2: {
    flex: 2
  },
  nav: {
    textAlign: "center",
    color: "white",
    height: 20,
    borderColor: "white",
    borderWidth: 1
  },
  button: {
    marginBottom: 5,
    width: 360,
    alignItems: "center",
    backgroundColor: "tomato"
  },
  buttonText: {
    textAlign: "center",
    padding: 15,
    color: "white"
  },
  buttons: {
    width: 360,
    alignItems: "center",
    backgroundColor: "white"
  },
  buttonText1: {
    textAlign: "center",
    padding: 10,
    color: "black"
  }
};
export default function PPL() {
  const [navClick, setnavClick] = useState(false);
  const onPressButton = () => {
    console.log("button pressed");
  };
  const rightButtonConfig = {
    title: "Next",
    handler: () => {
      setnavClick(!navClick);
      console.log("handler", navClick);
    }
  };

  const titleConfig = {
    title: "PPL"
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <NavigationBar title={titleConfig} rightButton={rightButtonConfig} />
        {navClick ? (
          <View style={{ backgroundColor: "tomato" }}>
            <Text style={styles.nav}>Timeline</Text>
            <Text style={styles.nav}>Logout</Text>
          </View>
        ) : (
          console.log(navClick)
        )}
      </View>
      <View style={styles.container1}>
        <Text>Posts</Text>
      </View>
      <View style={styles.container2}>
        <TouchableHighlight onPress={onPressButton} underlayColor="orange">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Upload Posts</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressButton} underlayColor="orange">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Category</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressButton} underlayColor="orange">
          <View style={styles.buttons}>
            <Text style={styles.buttonText1}>Filter</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
