import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Nav from './Newnav';
import { router } from 'expo-router';

export default function App() {
  const [searchInput, setSearchInput] = useState('');

  const gerechten = [
    'Carpaccio',
    'Tomatensoep',
    'Bruschetta',
    'Garnalencocktail',
    'Geitenkaassalade',
    'Steak Deluxe',
    'Gegrilde Zalm',
    'Pasta Alfredo',
    'Truffelrisotto',
    'Kip Supreme',
    'Tiramisu',
    'Cheesecake',
    'Lava Cake',
    'Crème Brûlée',
    'Vanille-ijs',
    'Espresso',
    'Cappuccino',
    'Latte Macchiato',
    'Chocolademelk',
  ];

  const resultaten = gerechten.filter(item =>
    item.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSelect = (gerecht) => {
    const routes = {
      Carpaccio: '/Carpaccio',
      Tomatensoep: '/Tomatensoep',
      Bruschetta: '/Bruschetta',
      Garnalencocktail: '/Naal',
      Geitenkaassalade: '/Geitenkaassalade',
      'Steak Deluxe': '/SteakDeluxe',
      'Gegrilde Zalm': '/GegrildeZalm',
      'Pasta Alfredo': '/PastaAlfredo',
      Truffelrisotto: '/Truffelrisotto',
      'Kip Supreme': '/KipSupreme',
      Tiramisu: '/Tiramisu',
      Cheesecake: '/Cheesecake',
      'Lava Cake': '/Lava',
      'Crème Brûlée': '/Creme',
      'Vanille-ijs': '/VanilleIjs',
    };

    if (routes[gerecht]) {
      router.push(routes[gerecht]);
    }
  };

  return (
    <ImageBackground
      source={require('./images/home.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Nav />

        <View style={styles.heroContent}>
          <Text style={styles.eyebrow}>Restaurant & Lounge</Text>

          <Text style={styles.welkom}>WELKOM BIJ</Text>

          <Text style={styles.velor}>VÉLOR</Text>

          <View style={styles.accentLine} />

          <Text style={styles.subtitle}>
            Een verfijnde culinaire ervaring waar gastronomie,
            sfeer en vakmanschap samenkomen.
          </Text>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Zoek een gerecht..."
              placeholderTextColor="#888"
              value={searchInput}
              onChangeText={setSearchInput}
            />

            {searchInput.length > 0 && (
              <View style={styles.resultsContainer}>
                {resultaten.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSelect(item)}
                  >
                    <Text style={styles.resultItem}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(8, 7, 5, 0.62)',
  },

  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: 760,
    paddingHorizontal: 88,
  },

  eyebrow: {
    color: '#D4AF37',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 16,
    textTransform: 'uppercase',
  },

  welkom: {
    color: '#fff',
    fontSize: 58,
    fontWeight: '800',
  },

  velor: {
    color: '#D9B650',
    fontSize: 86,
    fontWeight: '900',
  },

  accentLine: {
    width: 96,
    height: 3,
    backgroundColor: '#D4AF37',
    marginTop: 18,
  },

  subtitle: {
    color: '#F2EFE8',
    fontSize: 19,
    lineHeight: 31,
    marginTop: 24,
    maxWidth: 550,
  },

  searchContainer: {
    marginTop: 30,
    width: 420,
    position: 'relative',
  },

  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D4AF37',
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 16,
  },

  resultsContainer: {
    position: 'absolute',
    top: 58,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 6,
    zIndex: 999,
    elevation: 10,
  },

  resultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    fontSize: 16,
  },
});