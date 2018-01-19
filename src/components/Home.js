
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/home.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    state = {}
    render() {
        return (
            <Text>Home</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});