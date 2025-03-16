// porgress.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styles from '../../styles';
import FooterBar from '../../components/footerBar';

const Progress = () => {
  return (
    <SafeAreaView style={styles.container1}>
      <Text style={styles.text1}>Progress Screen - Coming Soon!</Text>
      <FooterBar />
    </SafeAreaView>
  );
};

export default Progress;
