
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  imageSource: any;
}

export default function Menu() {
  const router = useRouter();
  

  const MENU_DATA: MenuItem[] = [
    { id: '1', name: 'Tajine Poulet au Citron', category: 'Plat chaud', price: 55, imageSource: require('../assets/images/tajine.png') },
    { id: '2', name: 'Couscous Royal (servi le vendredi)', category: 'plat chaud', price: 65, imageSource: require('../assets/images/couscous.png') },
    { id: '3', name: 'Harira avec Chebakia', category: 'Soupe et dessert', price: 20, imageSource: require('../assets/images/harira.png') },
    { id: '4', name: 'Pastilla au Poulet', category: 'Entrée', price: 45, imageSource: require('../assets/images/pasetilla.png') },
    { id: '5', name: 'Thé à la Menthe', category: 'Boisson', price: 12, imageSource: require('../assets/images/the.png') },
    { id: '6', name: "Jus d'Orange Frais", category: 'Boisson', price: 18, imageSource: require('../assets/images/orange.png') },
    { id: '7', name: 'Mesemen au Miel', category: 'Petit-dejeuner', price: 15, imageSource: require('../assets/images/msemen.png') },
  ];

  
