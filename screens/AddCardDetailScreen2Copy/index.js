<View style={styles.fullInputs}>
  <View style={styles.column}>
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>{"Start Notes"}</Text>
      <TextInput style={styles.input} onChangeText={text => setStartNotes(text)} value={startNotes} placeholder="Enter Start Notes" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
    </View>
  </View>
  <View style={styles.column}>
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>{"Termination Notes"}</Text>
      <TextInput style={styles.input} onChangeText={text => setTerminationNotes(text)} value={terminationNotes} placeholder="Enter Termination Notes" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
    </View>
  </View>
</View>;
export {};