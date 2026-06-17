import React, { useState } from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Nav from './Newnav';

export default function Reserveer() {
 
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [datum, setDatum] = useState('');
  const [tijd, setTijd] = useState('');
  const [personen, setPersonen] = useState('');

 
  const [melding, setMelding] = useState('');
  const [showMelding, setShowMelding] = useState(false);
  const [showDatumOpties, setShowDatumOpties] = useState(false);
  const [showTijdOpties, setShowTijdOpties] = useState(false);


const datumOpties = Array.from({ length: 14 }, (_, i) => {
  const d = new Date();
  const huidigeDag = d.getDate();

  d.setDate(huidigeDag + i);

  return d.toLocaleDateString('nl-NL');
});

  // Tijd opties
  const tijdOpties = [
    '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00', '20:30', '21:00',
  ];

  // Melding tonen
  const toonMelding = (tekst) => {
    setMelding(tekst);
    setShowMelding(true);
    setTimeout(() => setShowMelding(false), 3000);
  };

  const veranderNaam = (tekst) => {
    setNaam(tekst.replace(/[^a-zA-Z\s]/g, ''));
  };

  const veranderPersonen = (tekst) => {
    setPersonen(tekst.replace(/[^0-9]/g, ''));
  };

  const reserveer = () => {
    if (!naam || !email || !datum || !tijd || !personen) {
      toonMelding('Vul alle velden in');
      return;
    }

    if (!email.includes('@')) {
      toonMelding('Voer een geldig e-mailadres in');
      return;
    }

    toonMelding(`Reservering bevestigd voor ${naam} (${personen} personen)`);

    setNaam('');
    setEmail('');
    setDatum('');
    setTijd('');
    setPersonen('');
  };

  return (
    <ImageBackground
      source={require('./images/home.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Nav />

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>RESERVEREN</Text>
            <Text style={styles.title}>Reserveer een Tafel</Text>
            <Text style={styles.subtitle}>
              Wij kijken ernaar uit om u te verwelkomen.
            </Text>
          </View>

          <View style={styles.formPanel}>

            {/* Naam */}
            <TextInput
              style={styles.input}
              placeholder="Naam"
              value={naam}
              onChangeText={veranderNaam}
            />

            {/* Email */}
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Datum */}
            <TouchableOpacity
              style={styles.selectInput}
              onPress={() => {
                setShowDatumOpties(!showDatumOpties);
                setShowTijdOpties(false);
              }}
            >
              <Text style={datum ? styles.selectText : styles.selectPlaceholder}>
                {datum || 'Kies datum'}
              </Text>
            </TouchableOpacity>

            {showDatumOpties && (
              <View style={styles.optiesContainer}>
                {datumOpties.map((optie) => (
                  <TouchableOpacity
                    key={optie}
                    style={[
                      styles.optie,
                      datum === optie && styles.geselecteerdeOptie,
                    ]}
                    onPress={() => {
                      setDatum(optie);
                      setShowDatumOpties(false);
                    }}
                  >
                    <Text style={styles.optieText}>{optie}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Tijd */}
            <TouchableOpacity
              style={styles.selectInput}
              onPress={() => {
                setShowTijdOpties(!showTijdOpties);
                setShowDatumOpties(false);
              }}
            >
              <Text style={tijd ? styles.selectText : styles.selectPlaceholder}>
                {tijd || 'Kies tijd'}
              </Text>
            </TouchableOpacity>

            {showTijdOpties && (
              <View style={styles.optiesContainer}>
                {tijdOpties.map((optie) => (
                  <TouchableOpacity
                    key={optie}
                    style={[
                      styles.optie,
                      tijd === optie && styles.geselecteerdeOptie,
                    ]}
                    onPress={() => {
                      setTijd(optie);
                      setShowTijdOpties(false);
                    }}
                  >
                    <Text style={styles.optieText}>{optie}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Personen */}
            <TextInput
              style={styles.input}
              placeholder="Aantal personen"
              value={personen}
              onChangeText={veranderPersonen}
              keyboardType="numeric"
            />

            {/* Melding */}
            {showMelding && (
              <View style={styles.melding}>
                <Text style={styles.meldingText}>{melding}</Text>
              </View>
            )}

            {/* Submit */}
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

  selectInput: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
  },

  selectText: {
    color: '#111',
  },

  selectPlaceholder: {
    color: '#777',
  },

  
  optiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },

  
  optie: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },

  geselecteerdeOptie: {
    backgroundColor: '#C9903B',
  },

  
  optieText: {
    color: '#111',
    fontWeight: '700',
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
