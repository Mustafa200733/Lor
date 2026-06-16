import { View, Text, Image, StyleSheet } from 'react-native';
import Nav from '../Newnav';
export default function VanilleIjs() {
  return (
    <View style={styles.container}>
<Nav/>
      <Text style={styles.title}>
        Vanille IJs
      </Text>

      <Text style={styles.description}>
        Romig vanille-ijs gemaakt van echte vanillebonen.{"\n\n"}
        Een zachte en klassieke dessertfavoriet met een pure,
        volle smaak en een fluweelzachte textuur.
      </Text>

      <Text style={styles.price}>
        €5,50
      </Text>

      <Text style={styles.chefTitle}>
        Chef's Note
      </Text>

      <View style={styles.line} />

      <Text style={styles.chefText}>
        Ons vanille-ijs wordt ambachtelijk bereid met echte vanille
        voor een pure en natuurlijke smaakbeleving.
      </Text>

      <Image
        source={require('../images/chocoijs.png')}
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