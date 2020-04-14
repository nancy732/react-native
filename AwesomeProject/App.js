import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Signup from "./signup";
import Login from "./login";
import PPL from "./ppl";
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Signup" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen name="PPL" component={PPL} options={{ title: "PPL" }} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   {component ? (
    //     <Login setComponent={setComponent} />
    //   ) : (
    //     <Signup setComponent={setComponent} />
    //   )}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
