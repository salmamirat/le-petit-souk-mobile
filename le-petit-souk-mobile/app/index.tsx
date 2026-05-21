import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { Link } from 'expo-router';

export default function index() {


  return (
    <ImageBackground source={require('../assets/images/background-image.png')}
    style={styles.container} resizeMode='cover'>
      <View style={styles.mainCard}>

        <View style={styles.decorHeader}>
          <Image source={require('../assets/images/light-lamp.png')} style={styles.lampIcon} />
          <Image source={require('../assets/images/light-lamp.png')} style={styles.lampIcon} />
        </View>
<View style={styles.titleContainer}>
          <Text style={styles.restaurantName}>Le Petit Souk</Text>
          <Text style={styles.subTitle}>RESTAURANT TRADITIONNEL MAROCAIN</Text>
          <Text style={styles.separator}>--- {">"}⭐️{"<"} --- </Text>
        </View>

        <Text style={styles.welcomeMessage}>
          Bienvenue dans la tradition marocaine
        </Text>

        <View style={styles.imageWrapper}>
          <Image 
            source={require('../assets/images/logo-tajine.png')} 
            style={styles.mainLogoImage}
            resizeMode="contain"
          />
        </View>

        <Link href="/menu" asChild>
          <TouchableOpacity style={styles.button} activeOpacity={0.85}>
            <View style={styles.buttonContent}>
              <Image 
                source={require('../assets/images/icone-dish.png')} 
                style={styles.buttonIconImage} 
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>Voir le Menu</Text>
            </View>
          </TouchableOpacity>
        </Link>

      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 30,
  },
  mainCard: {
    flex: 1,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  decorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 20,
  },
  lampIcon: {
    width: 35,
    height: 70,
    opacity: 0.8,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  restaurantName: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#0B3C26',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    letterSpacing: 1.2,
    color: '#B38E50',
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
  },
  separator: {
    fontSize:20,
    color: '#B38E50',
    marginTop: 10,
    letterSpacing: 3,
  },
  welcomeMessage: {
    fontSize: 20,
    color: '#6d4706',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 28,
  },
  imageWrapper: {
    width: 450,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLogoImage: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#0B3C26',
    paddingVertical: 16,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIconImage: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFDF6',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
