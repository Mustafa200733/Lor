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

// Importeert de navigatiebalk die bovenaan de pagina staat.
import Nav from './Newnav';

// Dit is de reserveringspagina.
export default function Reserveer() {
  // Bewaart wat de gebruiker invult bij naam.
  const [naam, setNaam] = useState('');

  // Bewaart wat de gebruiker invult bij e-mail.
  const [email, setEmail] = useState('');

  // Bewaart de gekozen datum.
  const [datum, setDatum] = useState('');

  // Bewaart de gekozen tijd.
  const [tijd, setTijd] = useState('');

  // Bewaart het aantal personen.
  const [personen, setPersonen] = useState('');

  // Bewaart de tekst van de melding onder het formulier.
  const [melding, setMelding] = useState('');

  // Bepaalt of de melding zichtbaar is.
  const [showMelding, setShowMelding] = useState(false);

  // Bepaalt of de datumopties zichtbaar zijn.
  const [showDatumOpties, setShowDatumOpties] = useState(false);

  // Bepaalt of de tijdopties zichtbaar zijn.
  const [showTijdOpties, setShowTijdOpties] = useState(false);

  // Maakt automatisch 14 datums vanaf vandaag.
  const datumOpties = Array.from({ length: 14 }, (_, index) => {
    // Maakt een datumobject voor vandaag.
    const optie = new Date();

    // Verschuift de datum met het aantal dagen van de index.
    optie.setDate(optie.getDate() + index);

    // Haalt het jaar uit de datum.
    const jaar = optie.getFullYear();

    // Haalt de maand uit de datum en zorgt voor 2 cijfers.
    const maand = String(optie.getMonth() + 1).padStart(2, '0');

    // Haalt de dag uit de datum en zorgt voor 2 cijfers.
    const dag = String(optie.getDate()).padStart(2, '0');

    // Geeft de datum terug als jaar-maand-dag.
    return `${jaar}-${maand}-${dag}`;
  });

  // Dit zijn de tijden waaruit de gebruiker kan kiezen.
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

  // Laat een melding zien en verbergt die na 3 seconden.
  const toonMelding = (tekst) => {
    // Zet de tekst van de melding.
    setMelding(tekst);

    // Maakt de melding zichtbaar.
    setShowMelding(true);

    // Verbergt de melding na 3 seconden.
    setTimeout(() => setShowMelding(false), 3000);
  };

  // Laat bij naam alleen letters en spaties toe.
  const veranderNaam = (tekst) => {
    setNaam(tekst.replace(/[^a-zA-Z\s]/g, ''));
  };

  // Laat bij aantal personen alleen cijfers toe.
  const veranderPersonen = (tekst) => {
    setPersonen(tekst.replace(/[^0-9]/g, ''));
  };

  // Deze functie wordt uitgevoerd als de gebruiker op de knop drukt.
  const reserveer = () => {
    // Sluit het toetsenbord.
    Keyboard.dismiss();

    // Controleert of de e-mail eindigt op @gmail.com.
    const emailIsGeldig = email.trim().toLowerCase().endsWith('@gmail.com');

    // Haalt overbodige spaties weg bij de gekozen tijd.
    const tijdWaarde = tijd.trim();

    // Splitst de tijd in uren en minuten.
    const tijdDelen = tijdWaarde.split(':');

    // Zet het uur om naar een nummer.
    const uur = Number(tijdDelen[0]);

    // Zet de minuten om naar een nummer.
    const minuten = Number(tijdDelen[1]);

    // Controleert of de tijd een geldig uur en geldige minuten heeft.
    const tijdIsGeldig =
      tijdDelen.length === 2 &&
      uur >= 0 &&
      uur <= 23 &&
      minuten >= 0 &&
      minuten <= 59;

    // Controleert of alle velden zijn ingevuld.
    if (
      !naam.trim() ||
      !email.trim() ||
      !datum.trim() ||
      !tijd.trim() ||
      !personen.trim()
    ) {
      // Laat een foutmelding zien als er iets leeg is.
      toonMelding('Vul alle velden in');
      return;
    }

    // Controleert of het e-mailadres een Gmail-adres is.
    if (!emailIsGeldig) {
      toonMelding('Gebruik een Gmail-adres, bijvoorbeeld naam@gmail.com');
      return;
    }

    // Controleert of de gekozen tijd geldig is.
    if (!tijdIsGeldig) {
      toonMelding('Gebruik een tijd met :, bijvoorbeeld 18:30');
      return;
    }

    // Laat een succesmelding zien als alles klopt.
    toonMelding(`Reservering bevestigd voor ${naam} (${personen} personen)`);

    // Maakt het naamveld leeg.
    setNaam('');

    // Maakt het e-mailveld leeg.
    setEmail('');

    // Maakt de gekozen datum leeg.
    setDatum('');

    // Maakt de gekozen tijd leeg.
    setTijd('');

    // Maakt het aantal personen leeg.
    setPersonen('');
  };

  // Bouwt de zichtbare pagina.
  return (
    // Zet een achtergrondafbeelding achter de pagina.
    <ImageBackground
      source={require('./images/home.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Donkere laag over de achtergrond voor betere leesbaarheid. */}
      <View style={styles.overlay}>
        {/* Navigatiebalk bovenaan de pagina. */}
        <Nav />

        {/* ScrollView zorgt dat het formulier kan scrollen als het scherm klein is. */}
        <ScrollView contentContainerStyle={styles.content}>
          {/* Titelgedeelte van de pagina. */}
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>RESERVEREN</Text>
            <Text style={styles.title}>Reserveer een Tafel</Text>
            <Text style={styles.subtitle}>
              Wij kijken ernaar uit om u te verwelkomen.
            </Text>
          </View>

          {/* Witte kaart waar het formulier in staat. */}
          <View style={styles.formPanel}>
            {/* Invoerveld voor de naam. */}
            <TextInput
              style={styles.input}
              placeholder="Naam"
              value={naam}
              onChangeText={veranderNaam}
            />

            {/* Invoerveld voor het Gmail-adres. */}
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Knop waarmee de datumkeuze wordt geopend. */}
            <TouchableOpacity
              style={styles.selectInput}
              onPress={() => {
                setShowDatumOpties(!showDatumOpties);
                setShowTijdOpties(false);
              }}
            >
              {/* Toont de gekozen datum of een placeholder. */}
              <Text style={datum ? styles.selectText : styles.selectPlaceholder}>
                {datum || 'Kies datum'}
              </Text>
            </TouchableOpacity>

            {/* Toont de datumopties als de datumkeuze open is. */}
            {showDatumOpties && (
              <View style={styles.optiesContainer}>
                {datumOpties.map((optie) => (
                  // Elke datumoptie is een klikbare knop.
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

            {/* Knop waarmee de tijdkeuze wordt geopend. */}
            <TouchableOpacity
              style={styles.selectInput}
              onPress={() => {
                setShowTijdOpties(!showTijdOpties);
                setShowDatumOpties(false);
              }}
            >
              {/* Toont de gekozen tijd of een placeholder. */}
              <Text style={tijd ? styles.selectText : styles.selectPlaceholder}>
                {tijd || 'Kies tijd'}
              </Text>
            </TouchableOpacity>

            {/* Toont de tijdopties als de tijdkeuze open is. */}
            {showTijdOpties && (
              <View style={styles.optiesContainer}>
                {tijdOpties.map((optie) => (
                  // Elke tijdoptie is een klikbare knop.
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

            {/* Invoerveld voor het aantal personen. */}
            <TextInput
              style={styles.input}
              placeholder="Aantal personen"
              value={personen}
              onChangeText={veranderPersonen}
              keyboardType="numeric"
            />

            {/* Meldingsblok onder het formulier. */}
            {showMelding && (
              <View style={styles.melding}>
                <Text style={styles.meldingText}>{melding}</Text>
              </View>
            )}

            {/* Knop om de reservering te versturen. */}
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

// Styling voor alle onderdelen van de pagina.
const styles = StyleSheet.create({
  // Zorgt dat de achtergrond het hele scherm vult.
  background: {
    flex: 1,
  },

  // Donkere transparante laag over de achtergrond.
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 7, 4, 0.58)',
  },

  // Plaatst de inhoud onder de navbar en centreert het formulier.
  content: {
    paddingTop: 120,
    paddingHorizontal: 25,
    alignItems: 'center',
  },

  // Styling voor het titelgedeelte.
  hero: {
    marginBottom: 25,
    alignItems: 'center',
  },

  // Kleine tekst boven de titel.
  eyebrow: {
    color: '#C9903B',
    fontWeight: '800',
  },

  // Grote titel van de pagina.
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
  },

  // Subtitel onder de titel.
  subtitle: {
    color: '#ddd',
    textAlign: 'center',
    marginTop: 10,
  },

  // Witte formulierkaart.
  formPanel: {
    width: '50%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },

  // Styling voor normale invoervelden.
  input: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
  },

  // Styling voor de datum- en tijdknoppen.
  selectInput: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
  },

  // Tekstkleur als er een datum of tijd gekozen is.
  selectText: {
    color: '#111',
  },

  // Tekstkleur als er nog niets gekozen is.
  selectPlaceholder: {
    color: '#777',
  },

  // Container voor de datum- en tijdopties.
  optiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },

  // Styling voor een losse optieknop.
  optie: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },

  // Styling voor de gekozen optie.
  geselecteerdeOptie: {
    backgroundColor: '#C9903B',
  },

  // Tekst in een datum- of tijdoptie.
  optieText: {
    color: '#111',
    fontWeight: '700',
  },

  // Styling voor de verzendknop.
  button: {
    backgroundColor: '#C9903B',
    padding: 15,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 10,
  },

  // Tekst in de verzendknop.
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Styling voor de melding.
  melding: {
    backgroundColor: '#C9903B',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },

  // Tekst in de melding.
  meldingText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
});
