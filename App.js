import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/Screen/SearchScreen";
import ResultShowScreen from "./src/Screen/resultShowScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Business Search" component={SearchScreen} />
        <Stack.Screen name="ResturaintInfo" component={ResultShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
