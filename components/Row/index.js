import React from "react";
import { View } from "react-native";

import styles from "./styles";


const Row = ({ children }) => <View style={styles.Row}>{children}</View>;

export default Row;
