import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import Home from './screens/main/home';
import Profile from './screens/main/profile';
import Explore from './screens/main/explore';
import Settings from './screens/others/settings';
import Progress from './screens/main/progress';
import DailyTraining from './screens/training/daily-training';

const { Screen, Navigator } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="DailyTraining" component={DailyTraining} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Explore" component={Explore} />
        <Screen name="Settings" component={Settings} />
        <Screen name="Progress" component={Progress} />
      </Navigator>
    </NavigationContainer>
  );
}
