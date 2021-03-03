import React from 'react';
import {  StyleSheet,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default ({state, navigation}) =>{

    const goTo = (screenName) =>{
        navigation.navigate(screenName)
    }

    return(
        <>
            <View style={styles.Tab}>

                <TouchableOpacity  onPress={()=>goTo('Map')}>
                    <Icon style={{opacity:state.index===0 ? 1:0.5}} name={'map-marked-alt'} size={26} color={"#d59563"}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>goTo('AlertFire')}>
                    <Icon style={{opacity:state.index===1 ? 1:0.5}} name={'fire-extinguisher'} size={26} color={"#d59563"}/>
                </TouchableOpacity >

            </View>
        </>
    );

}

const styles = StyleSheet.create({
    Tab: {
   
        backgroundColor: "#38414e",
        height: 50,
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 40

    },

  
  
  });
  