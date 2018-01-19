
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';

export default class Settings extends Component {

    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/settings.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    state = {}
    render() {
        return (
           <Text>Settings</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});