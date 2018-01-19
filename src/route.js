import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, StatusBar
} from 'react-native';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Header from './components/Header';
import EditProfile from './components/EditProfile';
import DrawerSlide from './components/DrawerSlide';
import About from './components/About';
import Settings from './components/Settings';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

StatusBar.setHidden(true);

const Tabs = TabNavigator(
    {
        Home: {
            screen: Home
        },
        Favorites: {
            screen: Favorites
        },
        Settings: {
            screen: Settings
        },
        About: {
            screen: About
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#00e640',
            activeBackgroundColor: 'orange',
            inactiveBackgroundColor: 'blue'
        },
        swipeEnabled: true
    }
)

class TabsComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header drawerNavigator={this.props.drawerNavigator} />
                <Tabs />
            </View>
        );
    }
}

const Drawer = DrawerNavigator(
    {
        Tabs: {
            screen: props => <TabsComponent drawerNavigator={props.navigation} />
        },
        EditProfile: {
            screen: EditProfile
        }
    },
    {
        contentComponent: props => <DrawerSlide {...props} />,
    }
)
export default Drawer;