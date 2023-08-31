import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const UserProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    // Here, you can process the user profile data, e.g., send to a server
    // For now, we'll just navigate to the next screen
    navigation.navigate("GoalSetting");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User Profile</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput placeholder="Gender" value={gender} onChangeText={setGender} />
      <Button title="Next" onPress={handleSubmit} />
    </View>
  );
};

export default UserProfileScreen;
