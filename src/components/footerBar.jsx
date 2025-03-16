import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function FooterBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.FooterBar}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon name="home" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("DailyTraining")}>
        <Text style={styles.FooterBarText}>Training</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.FooterBarText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
        <Text style={styles.FooterBarText}>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text style={styles.FooterBarText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  FooterBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 10,
  },
  FooterBarText: {
    color: '#fff',
    fontSize: 11,
  },
});
