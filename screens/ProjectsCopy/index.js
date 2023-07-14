import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";

const AddCardDetailsScreen = () => {
  const [depth, setDepth] = useState("");
  const [to, setTo] = useState("");
  const [sampleNo, setSampleNo] = useState("");
  const [color, setColor] = useState("");
  const [sampleType, setSampleType] = useState("");
  const [moistureLevel, setMoistureLevel] = useState("");
  const [sampleDescription, setSampleDescription] = useState("");
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}></View>

        <View style={styles.fullInputs}>
          <View style={styles.column}>
            
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Depth (ft)"}</Text>
              <TextInput style={styles.input} onChangeText={text => setDepth(text)} value={depth} placeholder="Enter Depth (ft)" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Sample No."}</Text>
              <TextInput style={styles.input} onChangeText={text => setSampleNo(text)} value={sampleNo} placeholder="Enter Sample No." placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
          <View style={styles.column}>
            
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"To (ft)"}</Text>
              <TextInput style={styles.input} onChangeText={text => setTo(text)} value={to} placeholder="Enter To (ft)" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Color"}</Text>
              <TextInput style={styles.input} onChangeText={text => setColor(text)} value={color} placeholder="Enter Color" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
        </View>

        <View style={styles.fullInputs}>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Sample Type"}</Text>
              <TextInput style={styles.input} onChangeText={text => setSampleType(text)} value={sampleType} placeholder="Enter Sample Type" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Moisture Level"}</Text>
              <TextInput style={styles.input} onChangeText={text => setMoistureLevel(text)} value={moistureLevel} placeholder="Enter Moisture Level" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
        </View>

        <View style={styles.fullInputs}>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Sample Description"}</Text>
              <TextInput style={styles.input} onChangeText={text => setSampleDescription(text)} value={sampleDescription} placeholder="Enter Sample Description" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
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
  }
});
export default AddCardDetailsScreen;