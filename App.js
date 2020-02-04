import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import UsersMap from './components/UsersMap';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <UsersMap  />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

  }
});

