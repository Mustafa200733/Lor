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
  const [showDatumOpties, setShowDatumOpties] = useState(false);
  const [showTijdOpties, setShowTijdOpties] = useState(false);

  const datumOpties = Array.from({ length: 14 }, (_, index) => {
    const optie = new Date();
    optie.setDate(optie.getDate() + index);

    const jaar = optie.getFullYear();
    const maand = String(optie.getMonth() + 1).padStart(2, '0');
    const dag = String(optie.getDate()).padStart(2, '0');

    return `${jaar}-${maand}-${dag}`;
  });

  const tijdOpties = [
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
  ];

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

  // RESERVEREN FUNCTIE
  const reserveer = () => {
    Keyboard.dismiss();

    const emailIsGeldig = email.trim().toLowerCase().endsWith('@gmail.com');
    const tijdWaarde = tijd.trim();
    const tijdDelen = tijdWaarde.split(':');
    const uur = Number(tijdDelen[0]);
    const minuten = Number(tijdDelen[1]);
    const tijdIsGeldig =
      tijdDelen.length === 2 &&
      uur >= 0 &&
      uur <= 23 &&
      minuten >= 0 &&
      minuten <= 59;

    // validatie
    if (
      !naam.trim() ||
      !email.trim() ||
      !datum.trim() ||
      !tijd.trim() ||
      !personen.trim()
    ) {
      toonMelding('Vul alle velden in');
      return;
    }

    if (!emailIsGeldig) {
      toonMelding('Gebruik een Gmail-adres, bijvoorbeeld naam@gmail.com');
      return;
    }

    if (!tijdIsGeldig) {
      toonMelding('Gebruik een tijd met :, bijvoorbeeld 18:30');
      return;
    }

    // succes melding
    toonMelding(`Reservering bevestigd voor ${naam} (${personen} personen)`);

    // reset velden
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
      resizeMode="cover"
    >
      <View style={styles.overlay}>
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
              onChangeText={veranderNaam}
            />

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

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

            {/* AANTAL PERSONEN */}
            <TextInput
              style={styles.input}
              placeholder="Aantal personen"
              value={personen}
              onChangeText={veranderPersonen}
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
