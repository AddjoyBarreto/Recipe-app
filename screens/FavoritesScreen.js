import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MealItem from '../components/MealIteam';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const FavoritesScreen = (props)=> {
    const displayMeals = MEALS.filter(meal=>
        meal.id === 'm1'||   meal.id === 'm2'
    )

    const renderMealItem = (itemData) =>{
        //console.log(itemData)
        return(
            <View style={styles.widthcontainer}>
                <MealItem 
                title={itemData.item.title}
                color={props.navigation.getParam('color')}
                image={itemData.item.imageUrl}
                onSelect={()=>{
                    props.navigation.navigate({routeName:'MealDetail',params: {Mealid: itemData.item.id} })
                }}
                />
            </View>
            );
            }

    
        
        return (<View style={styles.screen}>
                <FlatList data={displayMeals} renderItem={renderMealItem}/>
                </View>
        )

}

export default FavoritesScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    widthcontainer:{
        flex:1,
        flexDirection:'column',
        width:'100%',
    },
});
