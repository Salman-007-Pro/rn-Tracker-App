//main
import React from "react";
import { withNavigation } from "react-navigation";

//components
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "./Spacer";

const NavLink = ({ navText, routeName, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(routeName);
      }}
    >
      <Spacer>
        <Text style={{ color: "#4c66b2" }}>{navText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

export default withNavigation(NavLink);
