import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import FooterBar from '../../components/footerBar';
import Carousel1 from '../../components/Carousel1';
import homeStyles from '../../homeStyles'; // Importar estilos específicos de Home
import styles from '../../styles';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container1}>
      <View style={homeStyles.header}>
        <Text style={homeStyles.title}>¡Hola, Hernán!</Text>
        <Text style={homeStyles.subtitle}>
          Hoy es un gran día para alcanzar tus objetivos. ¡Tu próximo entrenamiento te espera!
        </Text>
      </View>

      <View style={homeStyles.carouselWrapper}>
        <Carousel1 />
      </View>

      <View style={homeStyles.quickActions}>
        <TouchableOpacity 
          style={homeStyles.actionCard} 
          onPress={() => navigation.navigate("DailyTraining")}>
          <Text style={homeStyles.actionCardTitle}>Mi Entrenamiento</Text>
          <Text style={homeStyles.actionCardSubtitle}>Comienza ahora</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={homeStyles.actionCard} 
          onPress={() => navigation.navigate("Progress")}>
          <Text style={homeStyles.actionCardTitle}>Ver mi progreso</Text>
          <Text style={homeStyles.actionCardSubtitle}>Semana actual</Text>
        </TouchableOpacity>
      </View>

      <FooterBar />
    </SafeAreaView>
  );
};

export default Home;
