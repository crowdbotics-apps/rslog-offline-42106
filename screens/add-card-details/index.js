import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, Pressable, Picker, CheckBox } from "react-native";

const AddCardDetailsScreen = () => {
  const [unitSystem, setUnitSystem] = useState("");
  const [coordinateSystem, setCoordinateSystem] = useState("");
  const [siteUTMZone, setSiteUTMZone] = useState("");
  const [u, setU] = useState("");
  const [sampleType, setSampleType] = useState("");
  const [fieldTestType, setFieldTestType] = useState("");
  const [drillMethod, setDrillMethod] = useState("");
  const [autoAddBoringMethod, setAutoAddBoringMethod] = useState(false);
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}></View>

        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>{"Unit System"}</Text>
              <Picker style={styles.dropdown} selectedValue={unitSystem} onValueChange={value => setUnitSystem(value)}>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>{"Coordinate System"}</Text>
              <Picker style={styles.dropdown} selectedValue={coordinateSystem} onValueChange={value => setCoordinateSystem(value)}>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>{"Site UTM Zone"}</Text>
              <Picker style={styles.dropdown} selectedValue={siteUTMZone} onValueChange={value => setSiteUTMZone(value)}>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>{"u"}</Text>
              <Picker style={styles.dropdown} selectedValue={u} onValueChange={value => setU(value)}>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>{"Sample Type"}</Text>
              <Picker style={styles.dropdown} selectedValue={sampleType} onValueChange={value => setSampleType(value)}>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>

            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>{"Field Test Type"}</Text>
              <Picker style={styles.dropdown} selectedValue={fieldTestType} onValueChange={value => setFieldTestType(value)}>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.dropdownContainer}>
              <Text style={styles.dropdownText}>{"Drill Method"}</Text>
              <Picker style={styles.dropdown} selectedValue={drillMethod} onValueChange={value => setDrillMethod(value)}>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox value={autoAddBoringMethod} onValueChange={value => setAutoAddBoringMethod(value)} />
          <Text style={styles.checkboxText}>
            Automatically add the following Boring Method for a new test hole:
          </Text>
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
  columnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20
  },
  column: {
    flex: 1
  },
  dropdownContainer: {
    marginBottom: 20
  },
  dropdownText: {
    fontSize: 16,
    marginLeft: 20
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginTop: 10
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10
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