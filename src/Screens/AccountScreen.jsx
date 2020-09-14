//main
import React, { useContext } from "react";

//components
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

//contextApi
import { Context } from "../globalContextApi/globalContext";

const AccountScreen = () => {
  const { getSignOut } = useContext(Context);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <Text h2>Account Screen</Text>
      <Button title="Log Out" onPress={getSignOut}>
        log Out
      </Button>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
