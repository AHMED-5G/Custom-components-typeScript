import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";

import Home from "../screens/Home";
import Buttons from "../screens/Buttons";
import TextInputs from "../screens/TextInputs";

export type RootStackParamList = {
  Home: undefined;
  Buttons: undefined;
  TextInputs: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Buttons" component={Buttons} />
          <Stack.Screen name="TextInputs" component={TextInputs} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
