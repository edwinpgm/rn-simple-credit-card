import React from "react";
import { View } from "react-native";

import styles from "./styles";


const Col = ({children}) => (
  <View style={styles.Col}>{children}</View>
)

export default Col;