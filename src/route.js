import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, StatusBar
} from 'react-native';
import Home from './components/Home';
import Favorites from './components/Favorites';
import FavoriteIcon from './components/FavoriteIcon';
import Header from './components/Header';
import EditProfile from './components/EditProfile';
import DrawerSlide from './components/DrawerSlide';
import About from './components/About';
import Settings from './components/Settings';
import MovieDetail from './components/MovieDetail';
import Reminder from './components/Reminder';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers/index';

let store = createStore(reducers);

StatusBar.setHidden(true);

const HomeStack = StackNavigator(
    {
        Home: { screen: Home },
        MovieDetail: { screen: MovieDetail }
    }
)

const FavoritesStack = StackNavigator(
    {
        Favorites: { screen: Favorites },
        MovieDetail: { screen: MovieDetail }
    }
)

const SettingsStack = StackNavigator(
    {
        Settings: { screen: Settings },
        Reminder: { screen: Reminder }
    }
)

const Tabs = TabNavigator(
    {
        HomeStack: {
            screen: HomeStack,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Movies',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./images/home.png')}
                        style={{ height: 24, width: 24, tintColor: tintColor }}
                    />
                )
            }),
        },
        FavoritesStack: {
            screen: FavoritesStack,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ tintColor }) => (
                    <FavoriteIcon tintColor={tintColor} />
                )
            }),
        },
        SettingsStack: {
            screen: SettingsStack,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./images/settings.png')}
                        style={{ height: 24, width: 24, tintColor: tintColor }}
                    />)
            }),
        },
        About: {
            screen: About,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'About',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./images/about.png')}
                        style={{ height: 24, width: 24, tintColor: tintColor }}
                    />)
            }),
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: '#5564B1',
            inactiveBackgroundColor: '#5564B1',
            upperCaseLabel: false,
            iconStyle: {
                alignItems: "center",
                justifyContent: "flex-end",
                height: 30,
                width: 40,
            }
        },
        swipeEnabled: true,
    }
)


const Drawer = DrawerNavigator(
    {
        Tabs: {
            screen: Tabs
        },
        EditProfile: {
            screen: EditProfile
        }
    },
    {
        contentComponent: props => <DrawerSlide {...props} />
    }
)

export default class App extends Component {
    state = {}
    render() {
        return (
            <Provider store={store}>
                <Drawer />
            </Provider>
        );
    }
}