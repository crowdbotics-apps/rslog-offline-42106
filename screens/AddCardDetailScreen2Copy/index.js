import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";

const AddCardDetailsScreen = ({
  route
}) => {
  const navigation = useNavigation();
  const {} = route.params || {};
  const [overburdenThickness, setOverburdenThickness] = useState("");
  const [rockDepth, setRockDepth] = useState("");
  const [coreBoxCount, setCoreBoxCount] = useState("");
  const [drillerName, setDrillerName] = useState("");
  const [disturbed, setDisturbed] = useState("");
  const [undisturbed, setUndisturbed] = useState("");
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}></View>
        <View style={styles.fullInputs}>
          
          
        </View>

        <View style={styles.fullInputs}>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Thickness of Overburden (ft)"}</Text>
              <TextInput style={styles.input} onChangeText={text => setOverburdenThickness(text)} value={overburdenThickness} placeholder="Enter Thickness of Overburden (ft)" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Depth Drilled into Rock (ft)"}</Text>
              <TextInput style={styles.input} onChangeText={text => setRockDepth(text)} value={rockDepth} placeholder="Enter Depth Drilled into Rock (ft)" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
        </View>

        <View style={styles.fullInputs}>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Total # of Core Boxes"}</Text>
              <TextInput style={styles.input} onChangeText={text => setCoreBoxCount(text)} value={coreBoxCount} placeholder="Enter Total # of Core Boxes" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Name of Driller"}</Text>
              <TextInput style={styles.input} onChangeText={text => setDrillerName(text)} value={drillerName} placeholder="Enter Name of Driller" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
        </View>

        <View style={styles.fullInputs}>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Disturbed"}</Text>
              <TextInput style={styles.input} onChangeText={text => setDisturbed(text)} value={disturbed} placeholder="Enter Disturbed" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Undisturbed"}</Text>
              <TextInput style={styles.input} onChangeText={text => setUndisturbed(text)} value={undisturbed} placeholder="Enter Undisturbed" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
        </View>

        <Pressable onPress={() => {
        navigation.navigate("GeneralBoreholeCopy", {
          projectId: "projectId"
        });
      }}>
          <View style={styles.btnContainer}>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Update</Text>
            </Pressable>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    padding: 20
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