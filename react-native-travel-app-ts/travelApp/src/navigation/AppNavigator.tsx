import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import React from "react";
import { useTheme } from "react-native-paper";
import { DrawerContent } from "./DrawerContent";
import { MainTabNavigator } from "./MainTabNavigator";

const Drawer = createDrawerNavigator();

const AppNavigator = (navProps: any) => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator
        drawerContent={(props: any) => (
          <DrawerContent {...props} toggleTheme={navProps.toggleTheme} />
        )}
      >
        <Drawer.Screen name="Home" component={MainTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
