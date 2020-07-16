import React from "react";
import { AsyncStorage, TouchableOpacity } from "react-native";
import { Appbar, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Header = ({ scene, previous, navigation }: any) => {
  const theme = useTheme();
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  return (
    <Appbar.Header
      accessibilityStates
      theme={{ colors: { primary: theme.colors.primary } }}
    >
      {previous ? (
        <Appbar.BackAction
          accessibilityStates
          onPress={navigation.goBack}
          color={theme.colors.text}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <MaterialCommunityIcons
            color={theme.colors.text}
            name="menu"
            size={30}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        accessibilityStates
        title={
          previous ? (
            title
          ) : (
            <MaterialCommunityIcons name="home-outline" size={40} />
          )
        }
      />
      {title == "Profile" && (
        <Appbar.Action
          accessibilityStates
          icon="logout"
          onPress={async () => {
            await AsyncStorage.removeItem("token");
            navigation.replace("Login");
          }}
        />
      )}
    </Appbar.Header>
  );
};
