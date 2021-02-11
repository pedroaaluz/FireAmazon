import { DarkTheme } from '@react-navigation/native';
import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';

import MapView from 'react-native-maps';
import Card from './../components/card';

import { DarkMap } from './../components/mapDark';

export default class Map extends Component {


  state = {
    places: [
      {
        id: 1,
        title: 'Aikerawa',
        description: 'Os suruís-aiqueuaras ou Aikewara, também conhecidos como Aikewa, suruís do Pará, Suruís ou Sororós são um grupo indígena que habita a região sudeste do estado brasileiro do Pará, mais precisamente na Terra Indígena Sororó, situada às margens da BR-153, nos municípios de Marabá, São Domingos, Brejo Grande e São Geraldo',
        latitude: -5.39949198013504,
        longitude: -48.93500818024609,
        image: require('../assets/aikewara.jpg'),
      },
      {
        id: 2,
        title: 'Amanaiés',
        description: 'Amanayé é um povo indígena brasileiro. Falam uma língua da família Tupi-Guarani, do tronco Tupi. Localizado no nordeste do Pará, no ano de 1990 sua população estimada era de 66 pessoas. Em 2001, tal grupo contava com 192 indivíduos.',
        latitude: -1.9683939396892691,
        longitude: -54.30732243778698,
        image: require('../assets/amanaies.jpg'),
      },
      {
        id: 3,
        title: 'Anambé',
        description: 'Anambé é um povo indígena brasileiro localizado no Pará. No ano de 1994, sua população estimada era de 105 pessoas. Em 2010, tal grupo contava com 133 indivíduos. Falam uma língua da família Tupi-Guarani.',
        latitude: -2.8672353198129232,
        longitude: -49.31074144139583,
        image: require('../assets/anambe.jpg'),
      },
      {
        id: 4,
        title: 'Aparai',
        description: 'Aparai é um povo indígena que habita a fronteira entre o Brasil, Suriname e Guiana Francesa. No Brasil, mantém há pelo menos 100 anos relações estreitas de convivência, coabitando a mesma aldeia e casando-se entre si.',
        latitude: 2.476581293016351,
        longitude: -53.25451706177065,
        image: require('../assets/aparai.jpg'),
      },     {
        id: 5,
        title: 'Arara',
        description: 'Arara do Pará (também conhecido como Ukarãngmã ou simplesmente Arara) é um povo indígena brasileiro. Habita a margem esquerda do rio Iriri, no estado brasileiro do Pará, mais precisamente nas terras indígenas Arara e Cachoeira Seca do Iriri. No ano de 1994 sua população estimada era de 158 pessoas. Em 1998, tal grupo contava com 195 indivíduos. Falam uma língua da família Karib. As mulheres dessa tribo usam como roupa apenas uma espécie de cinto chamado "uluri", feito de entrecasca de árvore. A presença dele significa que a mulher não está disponível sexualmente e a aproximação só acontece quando ela o retira. Se, por acaso, esse cinto se romper a mulher se sente nua e desprotegida. No ritual de passagem que marca a transição entre a infância e a vida adulta, os meninos ficam reclusos na casa dos homens e têm que passar por sofrimentos físicos e dar novas provas de força. Embora não haja um espaço físico determinado, as meninas também têm que cumprir alguns rituais de passagem.',
        latitude: -9.418746841510002,
        longitude: -54.23041814371179,
        image: require('../assets/arara.jpg'),
      },
      {
        id: 6,
        title: 'Arara Volta Grande',
        description: 'Os Arara da Volta Grande do Xingu vivenciaram o contato com o colonizador do século XVIII, o avanço da empresa extrativista na região, os constantes conflitos com outros grupos indígenas e a abertura da Transamazônica, a qual promoveu levas de migrações e a busca de novos espaços pelos colonos e empresas extrativistas. Estes impactos na região mudaram consideravelmente as relações socioeconômica, cosmológica e política no modo de vida dos Arara, assim como de suas relações com a região e demais grupos étnicos existes em seu entorno. ',
        latitude: -3.598454149718784,
        longitude: -51.709184147540135,
        image: require('../assets/arara2.jpg'),
      },
      {
        id: 7,
        title: 'Asurini do Tocantins',
        description: 'Os assurinis do Tocantins são um povo indígena brasileiro localizado no Pará. Em 1994, sua população estimada era de 225 pessoas. Em 2001, tal grupo contava com 303 indivíduos. Falam a língua Assurini do Tocantins, da família tupi-guarani.',
        latitude: -3.5407731565159346,
        longitude: -49.801810034568625,
        image: require('../assets/asurini.jpg'),
      },
      {
        id: 8,
        title: 'Araweté',
        description: 'Os arauetés (etnônimo brasílico: Araweté) são um povo indígena brasileiro que fala uma língua da família tupi-guarani. Habitam as terras indígenas Araweté Igarapé Ipixuna e Trincheira/Bacajá, no Pará. No ano de 1994 sua população estimada era de 220 pessoas. Em 2003, tal grupo contava com 293 indivíduos. A cosmologia araueté engloba conceitos de pessoa, de morte, e de divindade. Nos cantos e rituais xamânicos, as divindades e os mortos se manifestam aos humanos. O tema do canibalismo divino é central para a compreensão do conceito araueté da divindade e da pessoa. A metafísica araueté descreve o lugar do humano no universo, sua inscrição fundamental no elemento da temporalidade, e a lógica da identidade e da diferença que comanda sua ontologia original.',
        latitude: -4.775398515038076,
        longitude: -50.12191375985058,
        image: require('../assets/asurini2.jpg'),
      },
      {
        id: 9,
        title: 'Gavião Parkatêjê',
        description: 'Os Paracatejê-Gavião, são um povo indígena do grupo Gavião do Oeste cuja língua é o Timbira Oriental, da família Jê, também são conhecidos como "Parkatejê" e "Gavião Parkatejê". A denominação vem das penas de gavião usadas em suas flechas. Em 2010 perfaziam 582 indivíduos',
        latitude: -4.831649348127687,
        longitude: -48.73184788050933,
        image: require('../assets/gaviao.jpeg'),
      },
      {
        id: 10,
        title: 'Hixkaryana',
        description: 'Os Hixkaryana são um povo indígena que vive no Brasil, nos estados do Amazonas e do Pará. Com uma população total de 1.242 pessoas, fazem parte da família linguística Karib. ',
        latitude: -0.8481842917281016,
        longitude: -58.18590022705232,
        image: require('../assets/Hixkaryana.jpg'),
      },
      {
        id: 11,
        title: 'Carajá',
        description: 'Os carajás, também chamados karajá e iny mahãdu, são um grupo indígena que habita a região dos rios Araguaia e Javaés, nos estados de Goiás, Mato Grosso, Tocantins e Pará, no Brasil. Sua língua, a língua carajá, pertence à família linguística carajá, a qual, por sua vez, pertence ao tronco linguístico macrojê.',
        latitude: -1.1337463429282673,
        longitude: -49.726023776448415,
        image: require('../assets/caraja.jpg'),
      },
      {
        id: 12,
        title: 'kuruaya',
        description: 'Os Curuaias (Kuruaya, Xipáia-Kuruaya ou Kuruaia) são um grupo indígena que habita o sudeste do estado brasileiro do Pará, mais precisamente na Terra Indígena Kuruáya e na Terra Indígena Xipaya-Curuaya. ',
        latitude: -5.423388345349379,
        longitude: -54.7485196310384,
        image: require('../assets/kuruaya.jpg'),
      },
      {
        id: 13,
        title: 'Apiaká',
        description: 'Os apiacás é um povo indígena brasileiro. Localizado no Mato Grosso e Pará, no ano de 1989 sua população estimada era de 43 pessoas. Em 2001, tal grupo contava com 192 indivíduos. Historicamente falam a língua apiacá, uma língua da família Tupi-Guarani, do tronco Tupi. ',
        latitude: -3.307275132079962,
        longitude: -55.85639464701655,
        image: require('../assets/apiaka.jpg'),
      },

    ],

  };

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  };

  render() {

    const { latitude, longitude } = this.state.places[0];
 
    return (

      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <MapView
          ref={map => this.mapView = map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 6.0003,
            longitudeDelta: 6.00003,
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showBuildings={false}
          onMapReady={this._mapReady}
          customMapStyle={DarkMap}
        >
          {this.state.places.map((place, index) => (
            <MapView.Marker
              ref={mark => place.mark = mark}
              title={place.title}
              opacity={0.9}
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
              image={require('../assets/iconIndio.png')}
            />
          ))}
        </MapView>
        <ScrollView
          style={styles.placesContainer}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const place = (e.nativeEvent.contentOffset.x > 0)
              ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
              : 0;

            const { latitude, longitude, mark } = this.state.places[place];

            this.mapView.animateToCoordinate({
              latitude,
              longitude
            }, 500);

            setTimeout(() => {
              mark.showCallout();
            }, 500)
          }}
        >
          {this.state.places.map((place, index) => (
            <>

              <Card
                key={index}
                name={place.title}
                image={place.image}
                description={place.description}
              />

            </>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  placesContainer: {
    width: '100%',
    maxHeight: 200,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
  },

  description: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
});