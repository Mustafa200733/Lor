import { View, Text, Image, StyleSheet } from 'react-native';
import Nav from './Newnav';
export default function Tomatensoep() {
  return (
    <View style={styles.container}>
<Nav/>
      <Text style={styles.title}>
        Tomatensoep
      </Text>

      <Text style={styles.description}>
        Fluweelzachte tomatensoep gemaakt van rijpe tomaten,
        verse basilicum en een lichte kruidenmix.{"\n\n"}
        Een klassieke, warme starter met een volle en frisse smaak.
      </Text>

      <Text style={styles.price}>
        €6,50
      </Text>

      <Text style={styles.chefTitle}>
        Chef's Note
      </Text>

      <View style={styles.line} />

      <Text style={styles.chefText}>
        Onze tomatensoep wordt dagelijks vers bereid met langzaam
        gegaarde tomaten voor een diepe, natuurlijke smaak.
      </Text>

      <Image
        source={require('./images/tomaat.png')}
        style={styles.image}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  title: {
    fontSize: 32,
    fontStyle: 'italic',
    color: '#D4AF37',
    marginTop: 120,
    marginLeft: 50,
  },

  description: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
    marginLeft: 50,
    lineHeight: 26,
    width: 500,
  },

  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D4AF37',
    marginTop: 20,
    marginLeft: 50,
  },

  chefTitle: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#D4AF37',
    marginTop: 40,
    marginLeft: 50,
  },

  line: {
    width: 250,
    height: 1,
    backgroundColor: '#D4AF37',
    marginTop: 10,
    marginLeft: 50,
  },

  chefText: {
    fontSize: 15,
    color: '#fff',
    marginTop: 15,
    marginLeft: 50,
    width: 450,
    lineHeight: 24,
  },

  image: {
    position: 'absolute',
    right: 50,
    top: 150,
    width: 600,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});