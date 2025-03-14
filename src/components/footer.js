import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();

  return ( <View style = {styles.footer} >
    <TouchableOpacity onPress = {() => navigation.navigate("Home")}>
      <Text style={styles.footerText} > Home </Text> </TouchableOpacity>

    <TouchableOpacity onPress = {() => navigation.navigate("DailyTraining")}>
      <Text style={styles.footerText} > Daily Training </Text> </TouchableOpacity>
    
    <TouchableOpacity onPress = {() => navigation.navigate("Profile")}>
      <Text style={styles.footerText} > Profile </Text> </TouchableOpacity>
    
    <TouchableOpacity onPress = {() => navigation.navigate("Explore")} >
      <Text style={styles.footerText} > Explore </Text> </TouchableOpacity>
    
    <TouchableOpacity onPress = {() => navigation.navigate("Progress")} >
      <Text style={styles.footerText} > Progress </Text> </TouchableOpacity>
    
    <TouchableOpacity onPress = {() => navigation.navigate("Settings")} >
      <Text style = {styles.footerText} > Settings </Text> </TouchableOpacity>
  
  </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingVertical: 10,
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
  },
});
