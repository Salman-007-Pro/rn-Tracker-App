//main
import React, { useState } from "react";

//components
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, buttonTitle, onSubmit, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = (email, password) => {
    setEmail("");
    setPassword("");
    onSubmit({ email, password });
  };
  return (
    <>
      <Spacer>
        <Text h3 style={styles.textHeading}>
          {headerText}
        </Text>
      </Spacer>
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error !== "" ? <Text style={styles.errorMessage}>{error}</Text> : null}
      <Spacer>
        <Button
          title={buttonTitle}
          onPress={() => onSubmitHandler(email, password)}
        />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  textHeading: {
    textAlign: "center",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
  },
});
