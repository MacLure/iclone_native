import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { IClone } from "../src";
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <IClone />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
