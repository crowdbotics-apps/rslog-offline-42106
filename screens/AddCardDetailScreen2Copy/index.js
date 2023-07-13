import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";

const AddCardDetailsScreen = ({
  route
}) => {
  const navigation = useNavigation();
  const {} = route.params || {};
  const [testHoleType, setTestHoleType] = useState("");
  const [name, setName] = useState("");
  const [drillingContractor, setDrillingContractor] = useState("");
  const [depth, setDepth] = useState("");
  const [loggedBy, setLoggedBy] = useState("");
  const [enteredBy, setEnteredBy] = useState("");
  const [reviewedBy, setReviewedBy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [equipment, setEquipment] = useState("");
  const [holeSize, setHoleSize] = useState("");
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}></View>
        <View style={styles.fullInputs}>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Test Hole Type"}</Text>
              <TextInput style={styles.input} onChangeText={text => setTestHoleType(text)} value={testHoleType} placeholder="Enter Test Hole Type" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Name"}</Text>
              <TextInput style={styles.input} onChangeText={text => setName(text)} value={name} placeholder="Enter Name" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Drilling Contractor"}</Text>
              <TextInput style={styles.input} onChangeText={text => setDrillingContractor(text)} value={drillingContractor} placeholder="Enter Drilling Contractor" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Depth (ft)"}</Text>
              <TextInput style={styles.input} onChangeText={text => setDepth(text)} value={depth} placeholder="Enter Depth (ft)" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Logged By"}</Text>
              <TextInput style={styles.input} onChangeText={text => setLoggedBy(text)} value={loggedBy} placeholder="Enter Logged By" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Entered By"}</Text>
              <TextInput style={styles.input} onChangeText={text => setEnteredBy(text)} value={enteredBy} placeholder="Enter Entered By" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Reviewed By"}</Text>
              <TextInput style={styles.input} onChangeText={text => setReviewedBy(text)} value={reviewedBy} placeholder="Enter Reviewed By" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Start Date"}</Text>
              <TextInput style={styles.input} onChangeText={text => setStartDate(text)} value={startDate} placeholder="Enter Start Date" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"End Date"}</Text>
              <TextInput style={styles.input} onChangeText={text => setEndDate(text)} value={endDate} placeholder="Enter End Date" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
        </View>
        <View style={styles.fullInputs}>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Equipment"}</Text>
              <TextInput style={styles.input} onChangeText={text => setEquipment(text)} value={equipment} placeholder="Enter Equipment" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Hole & Drill Bit Size (in)"}</Text>
              <TextInput style={styles.input} onChangeText={text => setHoleSize(text)} value={holeSize} placeholder="Enter Hole & Drill Bit Size (in)" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
            </View>
          </View>
        </View>
        <Pressable onPress={() => {
        navigation.navigate("GeneralBoreholeCopy", {
          projectId: "projectId"
        });
      }}><View style={styles.btnContainer}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Update</Text>
          </Pressable>
        </View></Pressable>
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