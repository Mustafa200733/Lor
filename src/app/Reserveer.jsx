import React, { useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Nav from './Newnav';

export default function Reserveer() {

  // INPUT STATES
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [personen, setPersonen] = useState('');

  // MELDING STATES
  const [melding, setMelding] = useState('');
  const [showMelding, setShowMelding] = useState(false);

  // RESERVEREN FUNCTIE
  const reserveer = () => {
    Keyboard.dismiss();

    // validatie
    if (
      !naam.trim() ||
      !email.trim() ||
      !datum.trim() ||
      !tijd.trim() ||
      !personen.trim()
    ) {
      setMelding('❌ Vul alle velden in');
      setShowMelding(true);

      setTimeout(() => setShowMelding(false), 3000);
      return;
    }

    // succes melding
    setMelding(`✅ Reservering bevestigd voor ${naam} (${personen} personen)`);
    setShowMelding(true);

    // reset velden
    setNaam('');
    setEmail('');
    setDatum('');
    setTijd('');
    setPersonen('');

    setTimeout(() => setShowMelding(false), 3000);
  };

  return (
    <ImageBackground
      source={require('./images/home.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>

        {/* NAVBAR */}
        <Nav />

        <ScrollView contentContainerStyle={styles.content}>

          {/* TITEL */}
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>RESERVEREN</Text>
            <Text style={styles.title}>Reserveer een Tafel</Text>
            <Text style={styles.subtitle}>
              Wij kijken ernaar uit om u te verwelkomen.
            </Text>
          </View>

          {/* FORMULIER */}
          <View style={styles.formPanel}>

            <TextInput
              style={styles.input}
              placeholder="Naam"
              value={naam}
              onChangeText={setNaam}
            />

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              placeholder="Datum"
              value={datum}
              onChangeText={setDatum}
            />

            <TextInput
              style={styles.input}
              placeholder="Tijd"
              value={tijd}
              onChangeText={setTijd}
            />

            {/* AANTAL PERSONEN */}
            <TextInput
              style={styles.input}
              placeholder="Aantal personen"
              value={personen}
              onChangeText={setPersonen}
              keyboardType="numeric"
            />

            {/* MELDING ONDER AANTAL PERSONEN */}
            {showMelding && (
              <View style={styles.melding}>
                <Text style={styles.meldingText}>{melding}</Text>
              </View>
            )}

            {/* KNOP */}
            <TouchableOpacity style={styles.button} onPress={reserveer}>
              <Text style={styles.buttonText}>
                RESERVERING VERSTUREN
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
    </ImageBackground>
  );
}

// STYLES
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 7, 4, 0.58)',
  },

  content: {
    paddingTop: 120,
    paddingHorizontal: 25,
    alignItems: 'center',
  },

  hero: {
    marginBottom: 25,
    alignItems: 'center',
  },

  eyebrow: {
    color: '#C9903B',
    fontWeight: '800',
  },

  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
  },

  subtitle: {
    color: '#ddd',
    textAlign: 'center',
    marginTop: 10,
  },

  formPanel: {
    width: '50%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },

  input: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
  },

  button: {
    backgroundColor: '#C9903B',
    padding: 15,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  melding: {
    backgroundColor: '#C9903B',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },

  meldingText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
});