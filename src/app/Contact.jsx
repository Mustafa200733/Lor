import { View, Text, StyleSheet, Image } from 'react-native'
import Nav from './Newnav';
export default function Contact() {
  return (

<View style={styles.container}>
            <Nav/>

  <Text style={styles.title}>Contact</Text>

  <View style={styles.contactPanel}>
    <View style={styles.card}>
      <Image source={require('./images/loc.png')} style={styles.loc} />
      <View style={styles.info}>
        <Text style={styles.label}>Adres</Text>
        <Text style={styles.text}>Hoofdstraat 123</Text>
        <Text style={styles.text}>1012 AB Amsterdam</Text>
      </View>
    </View>

    <View style={styles.card}>
      <Image source={require('./images/tel.png')} style={styles.tel} />
      <View style={styles.info}>
        <Text style={styles.label}>Telefoon</Text>
        <Text style={styles.text}>+31 6 12345678</Text>
      </View>
    </View>

    <View style={styles.card}>
      <Image source={require('./images/mail.png')} style={styles.mail} />
      <View style={styles.info}>
        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.text}>info@Velor.nl</Text>
      </View>
    </View>
  </View>
</View>

  )}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1EA',
    paddingHorizontal: 28,
    alignItems: 'center',
  },

  title: {
    fontSize: 42,
    fontWeight: '800',
    color: '#2F2925',
    marginTop: 145,
    marginBottom: 36,
    textAlign: 'center',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },

  contactPanel: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#FFFDF9',
    paddingVertical: 36,
    paddingHorizontal: 34,
    borderRadius: 8,
    shadowColor: '#6D5848',
    shadowOpacity: 0.16,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 6,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 32,
  },

  loc: {
    width: 48,
    height: 48,
    marginRight: 10,
    tintColor: '#B89A78',
    resizeMode: 'contain',
    left: -2 ,

  },
  tel: {
    width: 28,
    height: 28,
    marginRight: 28,
    tintColor: '#B89A78',
    resizeMode: 'contain',
    left:7 ,
  },

  mail: {
    width: 38,
    height: 38,
    marginRight: 18,
    tintColor: '#B89A78',
    resizeMode: 'contain',
  },

  info: {
    flex: 1,
    paddingTop: 2,
  },

  label: {
    fontSize: 14,
    color: '#514B47',
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  text: {
    fontSize: 18,
    color: '#6B625C',
    fontWeight: '700',
    lineHeight: 28,
  },
});
