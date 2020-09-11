//main
import React, { useContext } from "react";

//components
import { StyleSheet, Text, View, Button } from "react-native";

//contextApi
import { Context } from "../globalContextApi/globalContext";

const SignInScreen = () => {
  const state = useContext(Context);
  return (
    <View>
      <Text>Sign In</Text>
      <Button title="add Counter" />
      <Button title="del Counter" />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
