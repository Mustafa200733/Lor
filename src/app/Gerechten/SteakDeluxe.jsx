import { View, Text, Image, StyleSheet } from 'react-native';
import Nav from '../Newnav';
export default function SteakDeluxe() {
  return (
    <View style={styles.container}>
<Nav/>
      <Text style={styles.title}>
        Steak Deluxe
      </Text>

      <Text style={styles.description}>
        Malse premium biefstuk, perfect gegrild op de grill{"\n"}
        en geserveerd met seizoensgroenten en een rijke pepersaus.{"\n\n"}
        Een krachtig en verfijnd gerecht voor de echte vleesliefhebber.
      </Text>

      <Text style={styles.price}>
        €24,50
      </Text>

      <Text style={styles.chefTitle}>
        Chef's Note
      </Text>

      <View style={styles.line} />

      <Text style={styles.chefText}>
        Onze steak wordt op hoge temperatuur gegrild om de perfecte
        sappigheid en smaak te behouden.
      </Text>

      <Image
        source={require('../images/steakdeluxe.png')}
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