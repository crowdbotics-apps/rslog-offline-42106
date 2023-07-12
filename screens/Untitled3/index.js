import { View } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.VbDpDKIt}></TextInput><View style={styles.WzthdJfh}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  VbDpDKIt: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  WzthdJfh: {
    height: 456,
    width: 331,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled3;