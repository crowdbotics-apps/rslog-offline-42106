import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";

const AddCardDetailsScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          
        </View>
        <View style={styles.fullInputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{"Title"}</Text>
            <TextInput style={styles.input} onChangeText={text => setFirstName(text)} value={firstName} placeholder="Enter Project Title" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{"Client"}</Text>
            <TextInput style={styles.input} onChangeText={text => setLastName(text)} value={lastName} placeholder="Enter Client Name" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{"Site Location"}</Text>
            <TextInput style={styles.input} onChangeText={text => setAddress1(text)} value={address1} placeholder="Enter Site Location" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{"Easting (X)"}</Text>
            <TextInput style={styles.input} onChangeText={text => setAddress2(text)} value={address2} placeholder="Enter your Address" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
        </View>
        <View style={styles.halfInputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{"Project No."}</Text>
            <TextInput style={styles.input} onChangeText={text => setCity(text)} value={city} placeholder="Enter Project No." placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{"Lead Engineer"}</Text>
            <TextInput style={styles.input} onChangeText={text => setState(text)} value={state} placeholder="Enter Lead Engineer" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
        </View>
        <View style={styles.halfInputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{"Unit System"}</Text>
            <TextInput style={styles.input} onChangeText={text => setZip(text)} value={zip} placeholder="Enter Unit System" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{"Coordinate System"}</Text>
            <TextInput style={styles.input} onChangeText={text => setCountry(text)} value={country} placeholder="Enter Coordinate System" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
        </View>
        <View style={styles.halfInputs}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{"Set UTM Zone"}</Text>
            <TextInput style={styles.input} onChangeText={text => setCardExpiry(text)} value={cardExpiry} placeholder="Enter UTM Zone" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{"  "}</Text>
            <TextInput style={styles.input} onChangeText={text => setCvv(text)} value={cvv} placeholder="U" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
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
    padding: 20
  },
  fullInputs: {
    paddingHorizontal: 20,
    justifyContent: "center"
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
  halfInputs: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row" // borderColor: '#9B9B9B',
    // borderWidth: 1,

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