// home.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styles from '../../styles';
import FooterBar from '../../components/footerBar';

const Explore = () => {
  return (
    <SafeAreaView style={styles.container1}>
      <Text style={styles.text1}>Explore Screen - Coming Soon!</Text>
      <FooterBar />
    </SafeAreaView>
  );
};

export default Explore;
