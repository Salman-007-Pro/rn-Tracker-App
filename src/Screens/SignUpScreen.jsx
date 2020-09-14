//main
import React, { useContext } from "react";

//components
import { StyleSheet, View } from "react-native";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
import { NavigationEvents } from "react-navigation";

//contextApi
import { Context } from "../globalContextApi/globalContext";

const SignUpScreen = () => {
  const { getSignUp, login, getClearErrorMessage } = useContext(Context);
  const { error } = login;
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={() => getClearErrorMessage()} />
      <AuthForm
        headerText="Sign up for Tracker"
        buttonTitle="Sign Up"
        error={error}
        onSubmit={getSignUp}
      />
      <NavLink
        navText="Already have an account? sign in instead"
        routeName="SignIn"
      />
    </View>
  );
};

export default SignUpScreen;
SignUpScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
});
