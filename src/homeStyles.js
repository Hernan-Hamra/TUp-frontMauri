import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const homeStyles = StyleSheet.create({
  header: {
    marginTop: height * 0.05,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginTop: 10,
  },
  carouselWrapper: {
    marginTop: 20,
    marginBottom: 20,
    maxHeight: height * 0.4, // Limitar altura para pantallas grandes
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  actionCard: {
    backgroundColor: '#ffffff',
    width: width * 0.4,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
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
});

export default homeStyles;
