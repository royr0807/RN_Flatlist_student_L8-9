import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import colors from "../styles/colors";

type propType = {
  color?: string; // optional prop
};

const ListItemSeparator: React.FC<propType> = ({ color }) => {
  return (
    <View
      style={[
        styles.separator,
        { backgroundColor: color || colors.theme.light.text },
      ]} 
    />
  );
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: "100%"
  } as ViewStyle, // unnecessary, but explicitly specifies style type
  // for clarity => this style can only be applied to View-based components
});
