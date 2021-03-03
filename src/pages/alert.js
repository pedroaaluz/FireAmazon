import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions, Share } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { IconButtom } from './iconButtons'
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';
import call from 'react-native-phone-call'

const MIN_HEIGHT = 5;
const MAX_HEIGHT = 280;



export default () => {

    const route = useRoute();
    const [userInfo, setUserInfo] = useState({

        name: route.params.name,
        image: route.params.image,
        description: route.params.description,
        people: route.params.people,
        lang: route.params.speak,
    });

    const onShare = async () => {
        try {

            const result = await Share.share({
                message: "Um risco de incêndio foi detectado na aldeia " + userInfo.name + ". Por favor, mande ajuda e não chegue perto das proximidades dessa aldeia, pois você pode correr perigo. Deixe que os profissionais contornem."
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message);
        }

    }

    makeCall = (number) => {
        const args = {
            number: number,
            prompt: true
        }
        call(args).catch(console.error)
    }

    return (
        <>
            <View style={styles.container}>

                <ImageHeaderScrollView
                    maxHeight={MAX_HEIGHT}
                    minHeight={MIN_HEIGHT}
                    maxOverlayOpacity={0.6}
                    minOverlayOpacity={0.3}
                    renderHeader={() => (
                        <Image source={userInfo.image} style={styles.image} />
                    )}
                    renderForeground={() => (
                        <View style={styles.titleContainer}>
                            <Text style={styles.imageTitle}>{userInfo.name}</Text>
                        </View>
                    )}

                >
                    <TriggeringView
                        onHide={() => navTitleView.current.fadeInUp(200)}
                        onDisplay={() => navTitleView.current.fadeOut(100)}>
                    </TriggeringView>

                    <View style={styles.description}>
                        <Text style={styles.textTema}>
                            {userInfo.name}
                        </Text>
                        <Text style={styles.textDescription}>
                            {userInfo.description}
                        </Text>
                    </View>

                    <View style={styles.contact}>
                        <Text style={styles.textAlert}>
                            Em caso de incêndio
                        </Text>
                        {IconButtom.map((IconButtom) => (
                            <>
                                <TouchableOpacity style={styles.box} key={IconButtom.index} onPress={()=> makeCall('98834525')}>
                                    <Icon name={IconButtom.Icon} size={20} style={{ color: '#7c7575' }} />
                                    <Text style={{ color: '#7c7575', fontSize: 20, marginHorizontal: 24 }}>
                                        {IconButtom.name}
                                    </Text>
                                </TouchableOpacity>
                            </>
                        ))}

                        <TouchableOpacity style={styles.box} onPress={() => onShare()}  >
                            <Icon name={'share'} size={20} style={{ color: '#7c7575' }} />
                            <Text style={{ color: '#7c7575', fontSize: 20, marginHorizontal: 24 }}>
                                Compartilhar alertar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageHeaderScrollView>

            </View>
        </>
    );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    image: {
        height: 300,
        width: Dimensions.get('window').width,
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 34,
    },
    description: {
        marginVertical: 30,
        padding: 20

    },
    textDescription: {
        fontSize: 18,
        textAlign: 'justify'
    },
    textTema: {
        fontSize: 28,
        marginBottom: 20,
        color: '#d59563',
        fontWeight: 'bold'
    },
    textAlert: {
        fontSize: 28,
        color: '#d59563',
        fontWeight: 'bold',
        marginBottom: 20

    },
    contact: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: 20,
        marginBottom: 40
    },

    box: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        marginBottom: 14,
        borderRadius: 20

    }
});
