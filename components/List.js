import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const List = (props) => {
        return (
            props.ingredients.map(iItem=>
                <View style={styles.container}>
                    <Text><Ionicons name='ios-snow' size={20} color='black' /></Text>
                    <Text style={styles.textstyles}>{iItem}</Text>            
                </View>
                )
        );
        
}

export default List;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: 40,
        marginVertical:5,
        flexDirection:'row',
    },
    textstyles:{
        flex:1,
        marginLeft:10,
    }
});
