import React from 'react';
import { StyleSheet, Text, View,Button, FlatList } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealIteam';

const CategoryMealScreen = (props)=> {
 // console.log(props.navigation.state.params);
    const catid = props.navigation.getParam('catgoryid');
    const selectedCategory = CATEGORIES.find(catgory => catgory.id === catid);

    const displayMeals = MEALS.filter(meal=>
        meal.categoryIds.indexOf(catid) >= 0
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

export default CategoryMealScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        flexDirection:"row",
    },
    widthcontainer:{
        flex:1,
        flexDirection:'column',
        width:'100%',
    },
});
