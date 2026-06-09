import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Nav() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link href="/" style={styles.navText}>
          HOME
        </Link>


        <Link href="/Menu" style={styles.navText}>
          MENU
        </Link>

        <Link href="/Contact" style={styles.navText}>
          CONTACT
        </Link>

        <Link href="/Reserveer" style={styles.button}>
          <Text style={styles.buttonText}>RESERVEER NU</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
  },

  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 4,
  },

navText: {
  color: '#FFFFFF',
  fontSize: 13,
  fontWeight: '600',
  letterSpacing: 0.8,
  marginHorizontal: 90 , 
  left: 500,
},

  button: {
    backgroundColor: '#C89B47',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
    textDecorationLine: 'none',
    left: 600,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
});