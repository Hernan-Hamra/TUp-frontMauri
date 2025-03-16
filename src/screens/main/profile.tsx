// home.tsx
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import styles from '../../styles';
import FooterBar from '../../components/footerBar';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container1}>
      <Text style={styles.text1}>Profile Screen - Coming Soon!</Text>
      <FooterBar />
    </SafeAreaView>
  );
};

export default Profile;
