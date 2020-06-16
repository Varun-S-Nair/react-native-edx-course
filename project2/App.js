import * as React from "react";
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from "./screens/MovieListScreen.js";
import MovieDetailsScreen from "./screens/MovieDetailsScreen.js";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Movies" component={MovieListScreen} />
          <Stack.Screen name="Details" component={MovieDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
