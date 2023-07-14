import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, Pressable, TextInput, Picker } from "react-native";

const AddCardDetailsScreen = () => {
  const [tableData, setTableData] = useState([]);
  const [depth, setDepth] = useState("");
  const [reportingValue, setReportingValue] = useState("");
  const [n, setN] = useState("");
  const [n60, setN60] = useState("");
  const [u2, setU2] = useState("");
  const [testType, setTestType] = useState("");

  const handleAddRow = () => {
    const newRow = {
      id: tableData.length + 1,
      depth: depth,
      reportingValue: reportingValue,
      n: n,
      n60: n60,
      u2: u2
    };
    setTableData([...tableData, newRow]);
    setDepth("");
    setReportingValue("");
    setN("");
    setN60("");
    setU2("");
  };

  const handleDeleteRow = id => {
    const updatedData = tableData.filter(item => item.id !== id);
    setTableData(updatedData);
  };

  const renderTableItem = ({
    item
  }) => <View style={styles.tableRow}>
      <TextInput style={styles.tableCell} value={item.depth} onChangeText={text => handleTableDataChange(item.id, "depth", text)} />
      <TextInput style={styles.tableCell} value={item.reportingValue} onChangeText={text => handleTableDataChange(item.id, "reportingValue", text)} />
      <TextInput style={styles.tableCell} value={item.n} onChangeText={text => handleTableDataChange(item.id, "n", text)} />
      <TextInput style={styles.tableCell} value={item.n60} onChangeText={text => handleTableDataChange(item.id, "n60", text)} />
      <TextInput style={styles.tableCell} value={item.u2} onChangeText={text => handleTableDataChange(item.id, "u2", text)} />
      <Pressable style={styles.deleteBtn} onPress={() => handleDeleteRow(item.id)}>
        <Text style={styles.deleteBtnText}>Delete Row</Text>
      </Pressable>
    </View>;

  const handleTableDataChange = (id, field, value) => {
    const updatedData = tableData.map(item => {
      if (item.id === id) {
        return { ...item,
          [field]: value
        };
      }

      return item;
    });
    setTableData(updatedData);
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Picker style={styles.dropdown} selectedValue={testType} onValueChange={value => setTestType(value)}>
            <Picker.Item label="Test Type" value="" />
            <Picker.Item label="Type 1" value="type1" />
            <Picker.Item label="Type 2" value="type2" />
            <Picker.Item label="Type 3" value="type3" />
          </Picker>
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Depth (ft)</Text>
            <Text style={styles.tableHeaderText}>Reporting Value</Text>
            <Text style={styles.tableHeaderText}>N</Text>
            <Text style={styles.tableHeaderText}>N60</Text>
            <Text style={styles.tableHeaderText}>u2</Text>
            <Text style={styles.tableHeaderText}></Text>
          </View>
          {tableData.map(row => {
          return renderTableItem(row);
        })}

          <View style={styles.btnContainer}>
            <Pressable style={styles.btn} onPress={handleAddRow}>
              <Text style={styles.btnText}>Add Row</Text>
            </Pressable>
          </View>
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
  dropdown: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%"
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
    flexDirection: "row"
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
  tableContainer: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    alignItems: "center"
  },
  tableHeaderText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    paddingVertical: 10,
    alignItems: "center"
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    textAlign: "center"
  },
  deleteBtn: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  deleteBtnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  }
});
export default AddCardDetailsScreen;