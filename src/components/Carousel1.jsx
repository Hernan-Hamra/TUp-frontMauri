import React from 'react';
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel'; // Importación correcta de la librería

// Obtener las dimensiones de la pantalla para calcular el tamaño del carrusel
const { width, height } = Dimensions.get('window');

// Datos de las imágenes para el carrusel
const images = [
  { uri: require('../../assets/images/imageCarousel1/image1.jpeg') },
  { uri: require('../../assets/images/imageCarousel1/image2.jpeg') },
  { uri: require('../../assets/images/imageCarousel1/image3.jpeg') },
];

const Carousel1 = () => {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        autoPlay
        autoPlayInterval={3000} // Intervalo de autoplay en milisegundos
        width={width * 0.8} // Ancho reducido al 80% de la pantalla
        height={(width * 0.8) / 1.5} // Altura proporcional (relación 3:2)
        data={images} // Datos de las imágenes
        scrollAnimationDuration={1000} // Duración de la animación del scroll
        renderItem={({ item }) => (
          <Image source={item.uri} style={styles.carouselImage} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginVertical: Math.max(height * 0.02, 10), // Espaciado dinámico arriba y abajo con un mínimo de 10px
    alignItems: 'center', // Centra horizontalmente el carrusel
  },
  carouselImage: {
    width: '100%', // Ocupa todo el ancho disponible dentro del carrusel
    height: '100%', // Ajusta la imagen al alto disponible
    borderRadius: 10, // Esquinas redondeadas para las imágenes
    resizeMode: 'cover', // Ajusta la imagen para cubrir completamente el área
  },
});

export default Carousel1;
