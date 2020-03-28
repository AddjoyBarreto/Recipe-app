import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridScreen from '../components/CategoryGridScreen'; 

const CategoriesScreen = (props)=> {

    const renderGridItem = (itemData) =>(
        <CategoryGridScreen 
        title={itemData.item.title} 
        color={itemData.item.color}
        onSelect={()=>{
            props.navigation.navigate({routeName: 'CategoryMeals', params:{ catgoryid: itemData.item.id, color: itemData.item.color}}) }} />
    )
           
        return(
               <FlatList data={CATEGORIES} renderItem={renderGridItem}  numColumns={2} />       
        )

}

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    grid:{
        flex:1,
        margin:15,
        height:150,
        borderColor:'blue',
        borderWidth:1,
    }
});
