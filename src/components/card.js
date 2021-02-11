import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';



export default (props) => {
    
        const navigation = useNavigation();
        const handleClick = () => {
            navigation.navigate("Alert", {
                name: props.name,
                description: props.description,
                image: props.image
            });
        }
    
    return (
        <>
            <TouchableOpacity style={styles.card} onPress={handleClick}>

                <Image style={styles.ImgItem} source={props.image} />

                <View style={styles.InfoArea}>
                    <Text style={styles.Name}>{props.name}</Text>
                </View>

            </TouchableOpacity>
        </>
    );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {

        width: width - 40,
        maxHeight: 1000,
        backgroundColor: 'black',
        marginHorizontal: 20,
        marginBottom: 30,
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    InfoArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        height: '30%',
        backgroundColor: '#38414e',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    Name: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#d59563',
    },
    ImgItem: {
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        opacity: 0.5

    }

});
