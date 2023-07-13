import React from "react";
import { View, Text, Picker } from "react-native";

function CardDetailScreen() {
  return <View>
      <Text>Card Detail Screen</Text>
      <Text>Geography</Text>
      <Picker>
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
    </View>;
}

export default CardDetailScreen;