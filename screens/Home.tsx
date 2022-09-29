import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import MedButton from "../components/mini/MedButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigations/RootStack";

type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MedButton
        title="Buttons"
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Buttons")}
      />
      <MedButton
        title="Text Inputs"
        style={styles.btnStyle}
        onPress={() => navigation.navigate("TextInputs")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    alignItems: "center",
  },
  btnStyle: {
    borderRadius: 10,
  },
});
