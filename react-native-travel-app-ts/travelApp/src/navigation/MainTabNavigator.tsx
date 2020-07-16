import React from "react";
import { Platform, AsyncStorage } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Places } from "../screens";
import { useTheme, Portal, FAB } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { PlaceDetail } from "../screens";
import { Header } from "./Header";

const Stack = createStackNavigator();

export const PlaceStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Places"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Places" component={Places} />
      <Stack.Screen name="Detail" component={PlaceDetail} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

export const MainTabNavigator = () => {
  const isFocused = useIsFocused();
  const theme = useTheme();
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Places"
        // shifting={true}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Places"
          component={PlaceStack}
          options={{
            tabBarIcon: "home-account",
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          accessibilityStates
          visible={isFocused}
          icon="feather"
          onPress={() => console.log("pressed FAB")}
          style={{
            backgroundColor: theme.colors.background,
            position: "absolute",
            bottom: 100,
            right: 16,
          }}
        />
      </Portal>
    </React.Fragment>
  );
};
