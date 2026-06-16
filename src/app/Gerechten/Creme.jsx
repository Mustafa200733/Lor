import { View, Text, StyleSheet, Image } from 'react-native'
import Nav from '../Newnav';
export default function Creme() {
  return (
    <View style={styles.container}>
          <Nav/>
      <Text style={styles.title}>CrèmeBrûlée</Text>
    
      
            <Text style={styles.description}>
                Romige vanillecrème met een knapperige gekarameliseerde suikerlaag.{"\n\n"}
        Een klassiek Frans dessert met een perfecte balans
        tussen romigheid en een krokante karameltopping.
            </Text>
      
            <Text style={styles.price}>
             €7,00
            </Text>
      
            <Text style={styles.chefTitle}>
              Chef's Note
            </Text>
      
            <View style={styles.line} />
      
            <Text style={styles.chefText}>
                Onze crème brûlée wordt vers bereid met echte vanille en
        vlak voor het serveren gekarameliseerd voor die perfecte crunch.
            </Text>
      
      <Image
              source={require('../images/brulee.png')}
              style={styles.image}
            />
    </View>
  )
}
const styles = StyleSheet.create({
    image: {
    width: 200, 
    height: 200,
  },
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


