import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";

export default function FinalOnBoarding() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="transparent"
        barstyle={"light-content"}
        translucent={true}
      />
      <ImageBackground
        source={
          darkMode === true
            ? require("../../assets/image/finalonboardingblack.png")
            : require("../../assets/image/finalonboarding.png")
        }
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}></View>
        <View         
          style={{
            backgroundColor: Colors.footbackground,
            paddingHorizontal: 18,
            paddingTop: 15,
            borderTopRightRadius: 50,
          }}
        >
          <Text style={[style.title, { textAlign: "center" }]}>
            Help you to Achieve your Dream Body
          </Text>
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <Text style={[style.txt, { textAlign: "left", lineHeight: 25 }]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <View style={{ paddingVertical: 30 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[style.btn, { backgroundColor: Colors.btn }]}
            >
              <Text style={style.btntxt}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center", bottom: 10}}>
            <Text style={style.txt}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
              <Text style={[style.txt, { color: Colors.btn}]}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
