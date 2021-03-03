import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput  } from "react-native";
import { places } from './../components/places';
import Card from './../components/cardFire';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Lower } from "./../components/Lower";

export default (props) => {

  const [Name, setName] = useState("");

  return (
    <>
        <ScrollView style={styles.container}>
          
          <View style={styles.boxName}>
            <Text style={styles.textName}>
              Aldeias sendo monitoradas
            </Text>
            <TextInput
            placeholder="Pesquise alguma aldeia aqui..."
            placeholderTextColor="#242f3e"
            onChangeText={text => setName(text)}
            value={Name}
            style={styles.Input}
          />
          </View>

          {places.filter((places) => (
              Lower(places.title).includes(Lower(Name))
            )).map((places, key) => (
            <>
              <Card
                key={key}
                name={places.title}
                image={places.image}
                description={places.description}
              />
            </>))

          }

        </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#242f3e',

  },
  textName: {
    fontSize: 30,
    color: '#d59563',
    textAlign: 'center'

  },
  boxName: {
    width: '100%',
    marginBottom: 18, 
    marginTop: 40,
    alignItems: 'center'
  },Input: {
    marginTop: 30,
    marginBottom: 40,
    backgroundColor: "#38414e",
    color: "#d59563",
    padding: 10,
    borderRadius: 20,
    width: "90%",
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
  },


});