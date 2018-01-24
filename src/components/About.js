
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, WebView
} from 'react-native';

export default class About extends Component {

    render() {
        return (
            <WebView
                source={{ uri: 'https://www.themoviedb.org/about/our-history' }}
            />
        );
    }
}