
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, WebView,
    ActivityIndicator
} from 'react-native';

export default class Splash extends Component {

    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cyan' }}
            >
                <Image
                    source={require('../images/logo.jpg')}
                    style={{ width: 200, height: 200, borderRadius: 100 }}
                />
                <Text
                    style={{
                        marginTop: 40,
                        fontSize: 40,
                        fontWeight: 'bold',
                        fontFamily: 'arial',
                        color: 'white'
                    }}
                >
                    THE MOVIE
                </Text>

                <ActivityIndicator
                style={{marginTop:10}}
                size="large" color="white" />
            </View>
        );
    }
}