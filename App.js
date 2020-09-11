//main
import React from "react";

//navigator
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";

//context Api
import { Provider } from "./src/globalContextApi/globalContext";

//navigation Screens
import {
  AccountScreen,
  SignInScreen,
  SignUpScreen,
  TrackCreateScreen,
  TrackDetailScreen,
  TrackListScreen,
} from "./src/Screens";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignInScreen: SignInScreen,
  }),
  mainFlow: createBottomTabNavigator({
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
    TrackListFlow: createStackNavigator({
      TrackDetail: TrackDetailScreen,
      TrackList: TrackListScreen,
    }),
  }),
});
const App = createAppContainer(switchNavigator);
export default () => (
  <Provider>
    <App />
  </Provider>
);
