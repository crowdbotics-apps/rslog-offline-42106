import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView, SafeAreaView, TextInput } from "react-native";

const AddCardDetailsScreen = () => {
  const [tableData, setTableData] = useState([]);
  const [contactType, setContactType] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");

  const renderTableItem = ({
    item
  }) => <View style={styles.tableRow}>
      <TextInput style={styles.tableCell} value={item.contactType} onChangeText={text => handleTableDataChange(item.id, "contactType", text)} />
      {
      /* <TextInput
       style={styles.tableCell}
       value={item.firstName}
       onChangeText={text => handleTableDataChange(item.id, "firstName", text)}
      /> */
    }
      <TextInput style={styles.tableCell} value={item.lastName} onChangeText={text => handleTableDataChange(item.id, "lastName", text)} />
      <TextInput style={styles.tableCell} value={item.companyName} onChangeText={text => handleTableDataChange(item.id, "companyName", text)} />
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
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Contact Type</Text>
            {
            /* <Text style={styles.tableHeaderText}>First Name</Text> */
          }
            <Text style={styles.tableHeaderText}>Last Name</Text>
            <Text style={styles.tableHeaderText}>Company Name</Text>
          </View>
          {tableData.map(row => {
          return renderTableItem(row);
        })}
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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
  }
});
export default AddCardDetailsScreen;