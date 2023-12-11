import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Category from './models/category';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <CategoriesScreen />
    </>
    
  );
}
