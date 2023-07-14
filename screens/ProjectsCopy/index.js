import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";

const AddCardDetailsScreen = () => {
  const [projectNo, setProjectNo] = useState("");
  const [leadEngineer, setLeadEngineer] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [casingDepth, setCasingDepth] = useState("");
  const [depthToWater, setDepthToWater] = useState("");
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}></View>

        <View style={styles.fullInputs}>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Date"}</Text>
              <TextInput style={styles.input} onChangeText={text => setDate(text)} value={date} placeholder="Enter Date" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Casing Depth (ft)"}</Text>
              <TextInput style={styles.input} onChangeText={text => setCasingDepth(text)} value={casingDepth} placeholder="Enter Casing Depth (ft)" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Time"}</Text>
              <TextInput style={styles.input} onChangeText={text => setTime(text)} value={time} placeholder="Enter Time" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Depth to Water (ft)"}</Text>
              <TextInput style={styles.input} onChangeText={text => setDepthToWater(text)} value={depthToWater} placeholder="Enter Depth to Water (ft)" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Update</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 40,
    justifyContent: "flex-start"
  },
  fullInputs: {
    paddingHorizontal: 20,
    justifyContent: "center",
    flexDirection: "row"
  },
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 5
  },
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5
  },
  inputText: {
    fontSize: 16,
    marginLeft: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%"
  },
  btnContainer: {
    padding: 30,
    paddingTop: 10,
    paddingHorizontal: 40,
    justifyContent: "center",
    marginTop: 20
  },
  btn: {
    backgroundColor: "black",
    height: 50,
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  headerText: {
    width: 192,
    height: 50,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    fontWeight: "700"
  },
  radioContainer: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  radioLabel: {
    fontSize: 16,
    marginBottom: 10
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#9B9B9B",
    marginRight: 10
  },
  radioButtonSelected: {
    backgroundColor: "black"
  },
  radioOptionText: {
    fontSize: 16
  }
});
export default AddCardDetailsScreen;