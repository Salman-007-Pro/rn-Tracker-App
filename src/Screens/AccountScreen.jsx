//main
import React, { useContext } from "react";

//components
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../Components/Spacer";

//contextApi
import { Context } from "../globalContextApi/globalContext";

//icon
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { getSignOut } = useContext(Context);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <Text h2 style={styles.heading}>
        Account Screen
      </Text>
      <Spacer>
        <Button title="Log Out" onPress={getSignOut}>
          log Out
        </Button>
      </Spacer>
    </SafeAreaView>
  );
};
AccountScreen.navigationOptions = {
  headerTitleStyle: { alignSelf: "center" },
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} color="black" />,
};
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    alignSelf: "center",
  },
});
