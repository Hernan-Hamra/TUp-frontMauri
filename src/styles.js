import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa', // Fondo claro y moderno
  },
  header: {
    marginTop: height * 0.05, // Margen superior dinámico
    paddingHorizontal: 20,
    alignItems: 'center', // Centra el texto horizontalmente
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40', // Color oscuro para contraste
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d', // Gris suave
    textAlign: 'center',
    marginTop: 10,
  },
  carouselWrapper: {
    marginVertical: 20,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Espaciado uniforme entre tarjetas
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  actionCard: {
    backgroundColor: '#ffffff',
    width: width * 0.4, // Tarjetas más compactas
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra para dispositivos Android
    alignItems: 'center',
  },
  actionCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 5,
  },
  actionCardSubtitle: {
    fontSize: 12,
    color: '#6c757d',
  },
  mainButton: {
    backgroundColor: '#007bff', // Azul motivador para el botón principal
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  mainButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container1: {
    flex: 1, // Esto asegura que el contenedor ocupe todo el espacio disponible
    justifyContent: 'flex-start', // Alinea el contenido en la parte superior
    paddingHorizontal: 1, // Espaciado horizontal (opcional)
    paddingBottom: 60, // Para que el contenido no se solape con el FooterBar
  },
  text1: {
    fontSize: 20, // Tamaño del texto
    fontWeight: 'bold', // Hacer el texto más grueso
    marginTop: 20, // Espaciado desde la parte superior (ajustar según sea necesario)
  },
});

export default styles;
