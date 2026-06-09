import { View, Text, Image} from 'react-native';
import { StyleSheet } from 'react-native';
import Nav from './Newnav';
export default function Bruschetta() {
  return (
   <View style={styles.container}>
         <Nav />
   
         <Text style={styles.title}>
           Bruschetta
         </Text>
   
       <Text style={styles.description}>
  Knapperig geroosterd brood belegd met verse tomaten,{"\n"}
  basilicum, knoflook en extra vergine olijfolie.{"\n\n"}
  Een klassiek Italiaans voorgerecht dat eenvoud
  en verse smaken perfect combineert.
</Text>

<Text style={styles.price}>
  €8,00
</Text>

<Text style={styles.chefTitle}>
  Chef's Note
</Text>

<View style={styles.line} />

<Text style={styles.chefText}>
  Onze bruschetta wordt dagelijks bereid met
  rijpe tomaten en versgebakken brood voor
  een authentieke Italiaanse smaakbeleving.
</Text>
         <Image
           source={require('./images/burseta.png')}
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