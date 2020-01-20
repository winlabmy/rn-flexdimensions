import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class HeightWidthFlex extends Component{
  render() {
    return(
      <View style={styles.cointainer}>
        <View style={styles.powderblue}></View>
        <View style={styles.skyblue}></View>
        <View style={styles.steelblue}></View>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  cointainer: {
    flex: 1
  },
  powderblue: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  skyblue: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  steelblue: {
    flex: 3,
    backgroundColor: 'steelblue'
  }
})