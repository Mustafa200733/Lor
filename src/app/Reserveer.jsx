import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Nav from './Newnav';

export default function Reserveer() {
  return (
    <ImageBackground
      source={require('./images/home.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Nav />

        <Text style={styles.title}>Reserveer</Text>

        <Text style={styles.subtitle}>
          Reserveer eenvoudig een tafel bij VÉLOR
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(8, 7, 5, 0.62)',
  },

  title: {
    fontSize: 34,
    color: '#B89A78',
    fontWeight: '700',
    position: 'absolute',
    top: 140,
    left: 40,
  },

  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 220,
    marginLeft: 40,
    maxWidth: 300,
    lineHeight: 22,
  },
});