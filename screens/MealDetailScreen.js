import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ImageBackground } from 'react-native';
import { MEALS } from '../data/dummy-data';
import List from '../components/List';

const MealDetailScreen = (props)=> {
    //console.log(props.navigation.getParam('Mealid'));

    const displayMeal = MEALS.filter(meal => props.navigation.getParam('Mealid') === meal.id);

    const MealDetailHandlet = (inputData) =>{

        return(
            <View style={styles.screen}>
                <ImageBackground source={{uri: inputData.item.imageUrl}}  style={styles.imgsty} />
                <View>
                    <Text style={styles.heading}>{inputData.item.title}</Text>
                </View>            
                <View style={styles.rowstyles}>
                    <Text>{inputData.item.affordability.toUpperCase()}</Text>
                    <Text>{inputData.item.complexity.toUpperCase()}</Text>
                    <Text>{inputData.item.duration} {'Min'.toUpperCase()}</Text>  
                </View>
                <View style={styles.container}>
                    <Text style={styles.texttitle}>{'Ingredients'.toUpperCase()}</Text>  
                    <List ingredients={inputData.item.ingredients}  numColumns={2}/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.texttitle}>{'steps'.toUpperCase()}</Text>  
                    <List ingredients={inputData.item.steps}  numColumns={2}/>
                </View>              
        </View>
        )
    }

        return (
                <FlatList keyExtractor={(item,index)=> item.id} data={displayMeal} renderItem={MealDetailHandlet} />
        )

}

export default MealDetailScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    imgsty:{
        width:'100%',
        height:200,
    },
    heading:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        textAlign:'center',
        paddingVertical:5,
        paddingHorizontal:5,
    },
    rowstyles:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container:{
        marginVertical:10,
        marginHorizontal:20,
    },
    texttitle:{
        fontFamily:'open-sans-bold',
        fontSize:15,
        textAlign:'left',
        color:'#41d95d',
    }
});
