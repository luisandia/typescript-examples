import React from "react";
import { SafeAreaView } from "react-native";
import { CardView } from "../components";
import { Button } from "react-native-paper";

interface Props {
  navigation: any;
}

const PlaceDetail: React.FC<Props> = (props) => {
  const { navigation } = props;
  const { item } = navigation.state.params;
  return (
    <SafeAreaView>
      <CardView {...(item as any)} />
      <Button
        style={{
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate("Form", { item });
        }}
      >
        Edit Place
      </Button>
    </SafeAreaView>
  );
};

export default PlaceDetail;
