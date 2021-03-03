import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, Dimensions, ScrollView, SafeAreaView } from "react-native";
import { pegar_fogo } from './../api';
import { places } from './../components/places';
import Card from './../components/cardFire';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default (props) => {

    const [locais, setLocais] = useState([]);

    const carregar = async () => {
        let listLocais = await pegar_fogo(places);
        setLocais(listLocais);

    }

    useEffect(() => {
        carregar();
    }, []);

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <TouchableOpacity style={styles.bttn} onPress={() => carregar()}>
                        <Icon name={'redo-alt'} size={20} color={"#4e5257"} />
                    </TouchableOpacity >
                    <View style={styles.boxName}>
                        <Text style={styles.textName}>
                            Risco de fogo
                        </Text>
                    </View>

                    {locais.length > 0 ? locais.map((place, key) => (
                        <>
                            <Card
                                key={key}
                                name={place.Namealdeia}
                                image={place.image}
                                description={place.description}
                            />
                        </>))

                        : locais.length == 0 ? <Text style={styles.NotFound}>Incêndio não detectado</Text> : 
                        <Text style={styles.NotFound}>O serviço do impe esta indisponível</Text> 
                   }

                </ScrollView>
            </SafeAreaView>
        </>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#242f3e'

    },
    bttn: {
        backgroundColor: "#d59563",
        width: 35,
        margin: 10,
        padding: 8,
        borderRadius: 25,
        marginTop: 30
    },
    textName: {
        fontSize: 30,
        color: '#d59563'
    },
    boxName: {
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 18
    },
    NotFound: {
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        color: '#fff',

    }

});