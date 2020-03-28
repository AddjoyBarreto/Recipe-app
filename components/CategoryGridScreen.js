import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const CategoryGridScreen = (props) => {
    let Touchfdbk = TouchableOpacity;
    if ( Platform.OS ==='android' && Platform.Version>=21){
        Touchfdbk = TouchableNativeFeedback;
    }
        return (
            <View style={styles.gridItem}>
                <Touchfdbk onPress={props.onSelect}>
                    <View style={{...styles.container, ...{backgroundColor:props.color}}}>
                        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                    </View>               
                </Touchfdbk>
            </View>
        )
}

export default CategoryGridScreen;

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        overflow:'hidden',
        borderRadius:10,
        elevation:5,
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius: 10,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        textAlign:'right',
    }
});

