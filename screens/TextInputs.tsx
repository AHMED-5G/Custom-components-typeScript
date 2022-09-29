import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { FunctionComponent, useState } from "react";
import { RootStackParamList } from "../navigations/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import EmptyHeader from "../components/mini/EmptyHeader";
import FormTextInput from "../components/mini/FormTextInput";
import { AntDesign } from "@expo/vector-icons";
import {
  validateHasWhiteSpace,
  validateEmail,
  validateIntNumber,
  validateShortTextLength,
  validateSpecialCharacters,
  validateTextMatch,
} from "../components/mini/validations";
import MyDropDown from "../components/mini/MyDropDown";
// import { ScrollView } from "react-native-gesture-handler";

type Props = StackScreenProps<RootStackParamList, "TextInputs">;
interface category {
  id: string;
  name: string;
}
interface country {
  id: string;
  name: string;
}
const TextInputs: FunctionComponent<Props> = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [categoryIsFocus, setCategoryIsFocus] = useState(false);
  const [CountryIsFocus, setCountryIsFocus] = useState(false);
  const categories: category[] = [
    {
      id: "1",
      name: "Food",
    },
    {
      id: "2",
      name: "Travel",
    },
  ];
  const countries: country[] = [
    {
      id: "1",
      name: "Japan",
    },
    {
      id: "2",
      name: "South Africa",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <EmptyHeader back />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView>
          <FormTextInput
            placeholder="User name"
            setText={setUserName}
            value={userName}
            validations={validateHasWhiteSpace(userName)}
          />
          <FormTextInput
            placeholder="Email"
            value={email}
            setText={setEmail}
            validations={validateEmail(email)}
          />
          <FormTextInput
            placeholder="Password"
            value={password}
            setText={setPassword}
            validations={
              validateEmail(email) || validateShortTextLength(password, 8)
            }
            secure
            icon={<AntDesign name="lock" size={24} color="black" />}
          />
          <FormTextInput
            placeholder="Password"
            secure
            value={confirmPassword}
            setText={setConfirmPassword}
            validations={validateTextMatch(
              password,
              confirmPassword,
              "password"
            )}
            icon={<AntDesign name="lock" size={24} color="black" />}
          />
          <FormTextInput
            placeholder="Phone"
            icon={<AntDesign name="phone" size={24} color="black" />}
            value={phone}
            setText={setPhone}
            validations={validateIntNumber(phone)}
          />
          <MyDropDown
            isFocus={categoryIsFocus}
            setIsFocus={setCategoryIsFocus}
            onFocus={() => setCategoryIsFocus(true)}
            onBlur={() => setCategoryIsFocus(false)}
            data={categories}
            value={category}
            labelField={"name"}
            valueField={"id"}
            placeholder="Category"
            onChange={(item: category) => {
              setCategory(item.id);
              setCategoryIsFocus(false);
            }}
            search
          />
          <MyDropDown
            isFocus={CountryIsFocus}
            setIsFocus={setCountryIsFocus}
            data={countries}
            value={country}
            labelField={"name"}
            valueField={"id"}
            placeholder="Country"
            onChange={(item: country) => {
              setCountry(item.id);
              setCountryIsFocus(false);
            }}
            leftIconStyle={{ marginLeft: 10 }}
            icon={<AntDesign name="earth" size={24} color="#0ebeff" />}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default TextInputs;

const styles = StyleSheet.create({});
