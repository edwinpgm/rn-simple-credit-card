import React from "react";
import { Text, TextInput, View } from "react-native";

import styles from "./styles";


const CCInput = ({ label }) => (
  <View>
    <Text style={styles.CCInput_label}>{label}</Text>
    <TextInput style={styles.CCInput_input} keyboardType="numeric" />
  </View>
);

export default CCInput;
