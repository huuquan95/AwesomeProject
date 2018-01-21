
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';

export default class Favorites extends Component {

    static navigationOptions = {
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/favorite.png')}
                style={{ width: 26, height: 26, }}
            />
        ),
    };
    state = {}
    render() {
        return (
            <Text>Favorites</Text>
        );
    }
}