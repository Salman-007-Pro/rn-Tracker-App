//main
import React, { useContext } from "react";

//components
import { StyleSheet, View } from "react-native";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
import { NavigationEvents } from "react-navigation";

//contextApi
import { Context } from "../globalContextApi/globalContext";

const SignInScreen = () => {
  const { login, getSignIn, getClearErrorMessage } = useContext(Context);
  const { error } = login;
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={() => getClearErrorMessage()} />
      <AuthForm
        headerText="Sign In to Your Account"
        buttonTitle="Sign In"
        error={error}
        onSubmit={getSignIn}
      />
      <NavLink
        navText="Don't have an account? Sign up instead"
        routeName="SignUp"
      />
    </View>
  );
};
SignInScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
});
