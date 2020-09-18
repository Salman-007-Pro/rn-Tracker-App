//main
import React, { useContext } from "react";

//components
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

//contextApi
import { Context } from "../globalContextApi/globalContext";
const TrackForm = () => {
  const {
    getChangeName,
    getStartRecording,
    getStopRecording,
    getReset,
    getCreateTrack,
    location: { name, recording, locations },
  } = useContext(Context);

  const saveTrack = async () => {
    await getCreateTrack(name, locations);
    getReset();
  };
  return (
    <>
      <Spacer>
        <Input
          placeholder="Record Name"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={name}
          onChangeText={getChangeName}
        />
      </Spacer>
      <View style={{ marginHorizontal: 15 }}>
        {recording ? (
          <Button title={"Stop"} onPress={getStopRecording} />
        ) : (
          <Button title={"Start Recording"} onPress={getStartRecording} />
        )}
        {!recording && locations.length && name ? (
          <Spacer>
            <Button title={"Save Recording"} onPress={saveTrack} />
          </Spacer>
        ) : null}
      </View>
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
