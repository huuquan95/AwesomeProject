
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableHighlight, TouchableOpacity,
} from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View
                style={{
                    alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'space-between', backgroundColor: '#5564B1',
                    height: 50, paddingLeft: 10, paddingRight: 10
                }}
            >
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('DrawerOpen') }}>
                    <Image
                        source={require('../images/menu.png')}
                        style={{ width: 26, height: 26 }}
                    />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, color: 'white' }}>{this.props.title}</Text>
                <TouchableOpacity>
                    {this.props.isShowListIcon != false ?
                        <Image
                            source={require('../images/grid.png')}
                            style={{ width: 26, height: 26 }}
                        />
                        : <View />}

                </TouchableOpacity>
            </View>
        );
    }
}