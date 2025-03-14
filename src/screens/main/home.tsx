import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../components/footer';
import Profile from './profile';

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          console.log('Button pressed');
          navigation.navigate('Profile'); // Mueve la navegación aquí
        }}
      />
      <Footer />
    </View>
  );
};

export default Home;
