import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Nav from './Newnav';

export default function Menu() {
  return (
    <View style={styles.container}>
      <Nav />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >

      <View style={styles.heroSection}>
        <View style={styles.heroText}>
          <Text style={styles.smallTitle}>
            ONS MENU
          </Text>

          <Text style={styles.mainTitle}>
            ONS MENU
          </Text>

          <Text style={styles.subtitle}>
            Met liefde bereid, speciaal voor u.
          </Text>
        </View>

        <Image
          source={require('./images/ijs.png')}
          style={styles.heroImage}
        />
      </View>

      <View style={styles.menuContainer}>
        {/* VOORGERECHTEN */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>
            VOORGERECHTEN
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Carpaccio</Text>
            <Text style={styles.price}>€10,50</Text>
          </View>
          <Text style={styles.description}>
            Rundercarpaccio met truffelmayonaise.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Tomatensoep</Text>
            <Text style={styles.price}>€6,50</Text>
          </View>
          <Text style={styles.description}>
            Romige tomatensoep met basilicum.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Bruschetta</Text>
            <Text style={styles.price}>€8,00</Text>
          </View>
          <Text style={styles.description}>
            Geroosterd brood met tomaat.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Garnalencocktail</Text>
            <Text style={styles.price}>€11,50</Text>
          </View>
          <Text style={styles.description}>
            Hollandse garnalen met cocktailsaus.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Geitenkaassalade</Text>
            <Text style={styles.price}>€9,50</Text>
          </View>
          <Text style={styles.description}>
            Geitenkaas met honing en walnoten.
          </Text>
        </View>

        {/* HOOFDGERECHTEN */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>
            HOOFDGERECHTEN
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Steak Deluxe</Text>
            <Text style={styles.price}>€24,50</Text>
          </View>
          <Text style={styles.description}>
            Gegrilde steak met pepersaus.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Gegrilde Zalm</Text>
            <Text style={styles.price}>€22,50</Text>
          </View>
          <Text style={styles.description}>
            Zalmfilet met citroenboter.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Pasta Alfredo</Text>
            <Text style={styles.price}>€18,00</Text>
          </View>
          <Text style={styles.description}>
            Romige pasta met Parmezaanse kaas.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Truffelrisotto</Text>
            <Text style={styles.price}>€21,00</Text>
          </View>
          <Text style={styles.description}>
            Risotto met zwarte truffel.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Kip Supreme</Text>
            <Text style={styles.price}>€19,50</Text>
          </View>
          <Text style={styles.description}>
            Gegrilde kip met groenten.
          </Text>
        </View>

        {/* NAGERECHTEN */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>
            NAGERECHTEN
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Tiramisu</Text>
            <Text style={styles.price}>€7,50</Text>
          </View>
          <Text style={styles.description}>
            Klassieke Italiaanse tiramisu.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Cheesecake</Text>
            <Text style={styles.price}>€6,50</Text>
          </View>
          <Text style={styles.description}>
            Cheesecake met rood fruit.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Lava Cake</Text>
            <Text style={styles.price}>€8,00</Text>
          </View>
          <Text style={styles.description}>
            Warme chocoladetaart met vloeibare kern.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Crème Brûlée</Text>
            <Text style={styles.price}>€7,00</Text>
          </View>
          <Text style={styles.description}>
            Vanillecrème met gekaramelliseerde suiker.
          </Text>

          <View style={styles.menuItem}>
            <Text style={styles.itemName}>Vanille-ijs</Text>
            <Text style={styles.price}>€5,50</Text>
          </View>
          <Text style={styles.description}>
            Met chocoladesaus en slagroom.
          </Text>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4F0',
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingTop: 64,
  },

  heroSection: {
    flexDirection: 'row',
    height: 320,
    backgroundColor: '#F5F2EE',
  },

  heroText: {
    width: '35%',
    justifyContent: 'center',
    paddingHorizontal: 35,
  },

  smallTitle: {
    color: '#B88A44',
    fontSize: 18,
    fontWeight: '600',
    top: -10,
    letterSpacing: 1,
  },

  mainTitle: {
    fontSize: 52,
    color: '#2F2F2F',
    fontWeight: 'bold',
    top: -10,
  },

  subtitle: {
    fontSize: 20,
    color: '#666',
    top: -1,
  },

  heroImage: {
    width: '65%',
    height: 420,
    resizeMode: 'cover',
    top: -140,
  },

  menuContainer: {
    flexDirection: 'row',
    backgroundColor: '#FAF8F5',
    top: -39,
  },

  column: {
    flex: 1,
    padding: 30,
    borderRightWidth: 1,
    borderColor: '#E5E0DA',
  },

  columnTitle: {
    fontSize: 26,
    color: '#8A6734',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  itemName: {
    fontSize: 22,
    color: '#333',
  },

  price: {
    fontSize: 22,
    color: '#555',
  },

  description: {
    marginTop: 8,
    marginBottom: 15,
    fontSize: 15,
    color: '#777',
    lineHeight: 24,
  },

});
