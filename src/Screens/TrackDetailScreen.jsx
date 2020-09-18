//main
import React, { useContext } from "react";

//components
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

//maps
import MapView, { Polyline } from "react-native-maps";

//contextApi
import { Context } from "../globalContextApi/globalContext";

const TrackDetailScreen = ({ navigation }) => {
  const { track } = useContext(Context);
  const id = navigation.getParam("id");
  const trackDetail = track.find((el) => el._id === id);
  const { name, locations } = trackDetail;
  console.log(locations);
  return (
    <View>
      <Text h2 style={styles.heading}>
        {name}
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...locations[0].coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={locations.map((location) => location.coords)} />
      </MapView>
    </View>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  heading: {
    alignSelf: "center",
  },
});
