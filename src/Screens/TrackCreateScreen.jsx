// changed location
import "../_mockLocations";

//main
import React, { useContext, useCallback } from "react";

//components
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../Components/Map";
import TrackForm from "../Components/TrackForm";

//contextApi
import { Context } from "../globalContextApi/globalContext";

//useLocation
import useLocation from "../useHook/useLocation";

//icon
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    getAddLocation,
    location: { recording },
  } = useContext(Context);
  const callback = useCallback(
    (location) => {
      getAddLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2 style={styles.heading}>
        Create a Track
      </Text>
      <Map />
      {err ? <Text>{err}</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};
TrackCreateScreen.navigationOptions = {
  headerTitleStyle: { alignSelf: "center" },
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} color="black" />,
};
export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({
  heading: {
    alignSelf: "center",
  },
});
