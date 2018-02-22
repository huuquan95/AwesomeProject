import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, WebView,
    ActivityIndicator, Dimensions
} from 'react-native';

var { height, width } = Dimensions.get('window');

export default class Splash extends Component {

    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5564B2' }}
            >
                <Image
                    source={require('../images/logo.jpg')}
                    style={{ width: width*3/5, height: width*3/5, borderRadius: width*3/10 }}
                />
                <Text
                    style={{
                        marginTop: 30,
                        fontSize: 40,
                        color: 'white'
                    }}
                >
                    THE MOVIE
                </Text>

                <ActivityIndicator
                    style={{ marginTop: 10 }}
                    size="large" color="white" />
            </View>
        );
    }
}