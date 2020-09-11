//main
import React, { useContext } from "react";

//components
import { StyleSheet, Text, View, Button } from "react-native";

//contextApi
import { Context } from "../globalContextApi/globalContext";

const SignUpScreen = () => {
  const { counter, getAddCounter, getDelCounter } = useContext(Context);
  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button title="Add Counter" onPress={getAddCounter} />
      <Button title="Del Counter" onPress={getDelCounter} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
