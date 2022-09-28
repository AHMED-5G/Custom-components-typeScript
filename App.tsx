import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MedButton from "./components/mini/MedButton";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
