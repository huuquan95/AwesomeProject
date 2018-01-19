
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableHighlight, TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View
                style={{
                    alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'space-between', backgroundColor: '#00e640',
                    padding: 10
                }}
            >
                <TouchableOpacity
                    onPress={() => { this.props.drawerNavigator.navigate('DrawerOpen') }}>
                    <Image
                        source={require('../images/menu.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <Text style={{ fontSize: 20 }}>Home</Text>
                <TouchableOpacity>
                    <Image
                        source={require('../images/grid.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});