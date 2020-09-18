//main
import React from "react";

//navigator
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";

//icon
import { FontAwesome } from "@expo/vector-icons";

//context Api
import { Provider } from "./src/globalContextApi/globalContext";

//navigation Ref
import { setNavigator } from "./src/navigationRef";

//navigation Screens
import {
  AccountScreen,
  SignInScreen,
  SignUpScreen,
  TrackCreateScreen,
  TrackDetailScreen,
  TrackListScreen,
  ResolveAuthScreen,
} from "./src/Screens";

const TrackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

TrackListFlow.navigationOptions = {
  headerTitleStyle: { alignSelf: "center" },
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} color="black" />,
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  }),
  mainFlow: createBottomTabNavigator({
    TrackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});
const App = createAppContainer(switchNavigator);
export default () => (
  <Provider>
    <App ref={setNavigator} />
  </Provider>
);
