
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';

export default class About extends Component {

    static navigationOptions = {
        tabBarLabel: 'About',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/about.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    state = {}
    render() {
        return (
            <Text>About</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});