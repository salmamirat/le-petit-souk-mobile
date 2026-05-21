import React, { useState } from 'react';
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
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});


  const MENU_DATA: MenuItem[] = [
    { id: "1", name: "Tajine Poulet au Citron", category: "Plat chaud", price: 55, imageSource: require('../assets/images/tajine.png') },
    { id: "2", name: "Couscous Royal (servi le vendredi)", category: 'plat chaud', price: 65, imageSource: require('../assets/images/couscous.png') },
    { id: "3", name: "Harira avec Chebakia", category: 'Soupe et dessert', price: 20, imageSource: require('../assets/images/harira.png') },
    { id: "4", name: "Pastilla au Pegeon", category: 'Entrée', price: 45, imageSource: require('../assets/images/pasetilla.png') },
    { id: "5", name: "Thé à la Menthe", category: 'Boisson', price: 12, imageSource: require('../assets/images/the.png') },
    { id: "6", name: "Jus d'Orange Frais", category: 'Boisson', price: 18, imageSource: require('../assets/images/orange.png') },
    { id: "7", name: "Mesemen au Miel", category: 'Petit-dejeuner', price: 15, imageSource: require('../assets/images/msemen.png') },
    
  ];

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }: { item: MenuItem }) => {
    const isLiked = !!favorites[item.id];
return (
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Image source={item.imageSource} style={styles.dishImage} resizeMode="cover" />
          <View style={styles.textContainer}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.dishCategory}>{item.category}</Text>
          </View>
        </View>

        <View style={styles.cardRight}>
          <Text style={styles.dishPrice}>{item.price} MAD</Text>
          <TouchableOpacity onPress={() => toggleFavorite(item.id)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Text style={styles.heartIcon}>{isLiked ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backArrowButton}>
          <Text style={styles.backArrowText}>{"<"}</Text>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Menu du Jour</Text>
        </View>
        <View style={{ width: 35 }} />
      </View>

      <FlatList
        data={MENU_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.returnButton} onPress={() => router.replace('/')}>
          <Text style={styles.returnButtonText}><Text style={styles.backArrowStyle}>{"<"}</Text>Retour à l'accueil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6E0BE',
  },
  header: {
    backgroundColor: '#0B3C26',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 25,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 0,
  },
  backArrowButton: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrowText: {
    color: '#B38E50',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: -4,
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFDF6',
    fontSize: 22,
    fontWeight: 'bold',
  },

  listContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dishImage: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
  },
  textContainer: {
    marginLeft: 14,
    flex: 1,
  },
  dishName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  dishCategory: {
    fontSize: 12,
    color: '#8A8A8A',
    marginTop: 2,
  },
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 50,
    paddingVertical: 2,
    marginLeft: 8,
  },
  dishPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#09570d',
  },
  heartIcon: {
    fontSize: 18,
    color: '#B38E50',
  },
  footerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: 'center',
  },
  returnButton: {
    backgroundColor: '#0B3C26',
    paddingVertical: 14,
    borderRadius: 20,
    width: '75%',
    alignItems: 'center',
    justifyContent: "center",
  },
  returnButtonText: {
    color: '#FFFDF6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backArrowStyle:{
    color:"#B38E50",
    fontSize:22,
    fontWeight:"bold",
  }
});
