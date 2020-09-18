//main
import React, { useContext } from "react";

//components
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";

//contextApi
import { Context } from "../globalContextApi/globalContext";

const Map = () => {
  const {
    location: { currentLocation, locations },
  } = useContext(Context);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // }}
    >
      <Circle
        center={currentLocation.coords}
        radius={120}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Circle
        center={currentLocation.coords}
        radius={20}
        strokeColor="rgba(158,158,255,1.0)"
        strokeWidth={2}
        fillColor="rgba(255,255,255,1)"
      />
      <Polyline coordinates={locations.map((location) => location.coords)} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
