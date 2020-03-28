import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ImageBackground, Platform } from 'react-native';
import {createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import Colors from '../constants/Colors';


const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: (navigationItem) =>({
            headerTitle: 'Categories',
            headerTitleAlign: 'center',
            headerRight:()=>(
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigationItem.navigation.openDrawer()
                  }}
                />
              </HeaderButtons>
            ),
            headerStyle:{
                
            }
          }),
    },
    CategoryMeals:{
        screen: CategoryMealScreen,
        navigationOptions: (navigationItem) =>({
            
            headerTitle: CATEGORIES.find(catname=> navigationItem.navigation.getParam('catgoryid') === catname.id).title,
          }),
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: (navigationItem) =>({
            // headerTitle: MEALS.find(meal=> navigationItem.navigation.getParam('Mealid') === meal.id).title,
            headerTitle: 'Meal Detail',
            headerRight:()=>(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title="Favorite"
                    iconName="ios-star-outline"
                    onPress={() => {
                      console.log('Mark as favorite!');
                    }}
                  />
                </HeaderButtons>
              ),
          }),
    },
});

const Favourites = createStackNavigator({
  Favourites: {
    screen:FavoritesScreen,
    navigationOptions:(navigationItem)=>({
      headerTitle: 'Favourites',
      headerTitleAlign:'center',
      headerRight:()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="menu"
            iconName="ios-menu"
            onPress={() => {
              navigationItem.navigation.openDrawer()
            }}
          /> 
          </HeaderButtons>
    ),
  })},
  MealDetail: MealDetailScreen,
})


const CommonBottomTabData = {
  Meals:{
    screen:MealNavigator,
    navigationOptions:{
      headerTitle: 'Meals',
      headerStyle:{
                
      },
      tabBarIcon: (tabInfo)=>{
          return <Ionicons name='ios-restaurant' size={23} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor,
    }
  },
  Favourite:{
    screen: Favourites,
    headerTitle: 'Favourites',
      // headerStyle:{
      //     fontColor:'white',
      // },
      // headerTintColor: '#fff',
      
    navigationOptions:{
      tabBarIcon: (tabInfo)=>{
          return <Ionicons name='ios-star' size={23} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.accentColor,
    }
  }
}

const MealStackNavigator =  Platform.OS === 'android' ? createMaterialBottomTabNavigator(CommonBottomTabData,{
  activeTintColor: Colors.accentColor,
  shifting: true,
  barStyle:{
    backgroundColor: Colors.primaryColor,
  }
}) :createBottomTabNavigator(CommonBottomTabData,{
  tabBarOptions:{
    activeTintColor: 'white',
  }
})

const FilterNavigator = createStackNavigator({
  Filter: {
    screen:FilterScreen,   
      navigationOptions: (navigationItem) =>({
        headerTitle: 'Filter',
        headerTitleAlign: 'center',
        headerLeft:()=>(
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="menu"
              iconName="ios-menu"
              onPress={() => {
                navigationItem.navigation.openDrawer()
              }}
            />
          </HeaderButtons>
        ),
        headerRight: ()=> (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Save"
              iconName="ios-save"
              onPress={navigationItem.navigation.getParam('save')}
            />
          </HeaderButtons>
        ),
        headerStyle:{
            
        }
      }),
  },
})

const MainNavigator = createDrawerNavigator({
  MainScreen:MealStackNavigator,
  Filter: FilterNavigator,
})


export default createAppContainer(MainNavigator);