import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground  } from 'react-native';


const MealIteam = (props) => {
    let Touchfdbk = TouchableOpacity;
    if ( Platform.OS ==='android' && Platform.Version>=21){
        Touchfdbk = TouchableNativeFeedback;
    }
    
        return (
            <View  style={styles.gridItem}>
                <Touchfdbk onPress={props.onSelect}>
                    <View style={{...styles.container, ...{backgroundColor:props.color}}}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgimg} imageStyle={{ borderRadius: 10 }}/>
                    <View>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    </View>
                    </View>               
                </Touchfdbk>
            </View>
        )
}

export default MealIteam;

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius: 10,
        elevation:8,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        textAlign:'right',
        color:'white',
        paddingVertical:5,
        paddingHorizontal:5,
    },
    bgimg:{
        width:'100%',
        height:'100%',
        borderRadius:20,
        position:"absolute",
    },
});
