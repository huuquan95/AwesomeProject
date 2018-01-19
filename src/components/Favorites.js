
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Image
} from 'react-native';

export default class Favorites extends Component {

    static navigationOptions = {
        tabBarLabel: 'Favorite movies',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/favorite.png')}
                style={[styles.icon, { tintColor: tintColor }]}
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

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});