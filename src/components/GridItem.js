
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, Dimensions
} from 'react-native';

var { height, width } = Dimensions.get('window');

export default class GridItem extends Component {

    render() {
        return (
            <View
                style={{ flexDirection: 'row', margin: 10 }}
            >
                <View style={{ marginRight: 10 }}>
                    <Image
                        source={require('../images/default_avatar.png')}
                        style={{ height: width / 2 - 15, width: width / 2 - 15 }}
                    />
                    <Text style={styles.text}>Death Note</Text>
                </View>
                <View>
                    <Image
                        source={require('../images/default_avatar.png')}
                        style={{ height: width / 2 - 15, width: width / 2 - 15 }}
                    />
                    <Text style={styles.text}>Birth Of the Dragon</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black', fontSize: 20, fontWeight: 'bold',
        textAlign: 'center', textAlignVertical: 'center',
        height: 55, width: width / 2 - 15
    }
});