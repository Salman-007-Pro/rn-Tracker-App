//main
import React, { useContext } from "react";

//components
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { ListItem, Text } from "react-native-elements";

//Events
import { NavigationEvents } from "react-navigation";

//contextApi
import { Context } from "../globalContextApi/globalContext";

const TrackListScreen = ({ navigation }) => {
  const { getFetchTrack, track } = useContext(Context);
  return (
    <>
      <NavigationEvents onWillFocus={getFetchTrack} />
      <FlatList
        data={track}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { id: item._id })
              }
            >
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  headerTitleStyle: { alignSelf: "center" },
  title: "Tracks",
};
export default TrackListScreen;

const styles = StyleSheet.create({});
