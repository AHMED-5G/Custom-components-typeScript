import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MedButton from "../components/mini/MedButton";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigations/RootStack";
import EmptyHeader from "../components/mini/EmptyHeader";

type Props = StackScreenProps<RootStackParamList, "Buttons">;

const Buttons = (props: Props) => {
  return (
    <View style={styles.container}>
      <EmptyHeader back />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 34, color: "black", fontWeight: "bold" }}>
          Buttons
        </Text>
        <MedButton
          onPress={() => console.log("hi")}
          width={150}
          style={{ elevation: 10 }}
          borderRadius={20}
          color="red"
          title="Icon"
          textStyle={{ fontSize: 29 }}
          icon={<AntDesign name="rightcircleo" size={24} color="black" />}
          iconContainerStyle={{ marginLeft: 20 }}
        />
        <MedButton onPress={() => {}} width={190} title="Disabled" disabled />
        <MedButton
          onPress={() => {}}
          width={90}
          square
          title="Square"
          textStyle={{ fontSize: 18 }}
        />
        <MedButton onPress={() => {}} circle title="circle" />
        <MedButton
          onPress={() => {}}
          width={100}
          loading={<Text>Loading</Text>}
          square
          style={{ marginTop: 20 }}
          title="Square"
        />
        <MedButton onPress={() => {}} width={100} loading color={"green"} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
export default Buttons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
