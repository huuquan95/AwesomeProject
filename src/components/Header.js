
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableHighlight, TouchableOpacity,
} from 'react-native';

const grid = require('../images/mode_grid.png');
const detail = require('../images/mode_detail.png');

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display_mode: 'detail'
        }
    }

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

                {this.props.isShowListIcon != false ?
                    <TouchableOpacity
                        onPress={() => {
                            let newDisplayMode = this.state.display_mode == 'detail' ? 'grid' : 'detail'
                            this.props.navigation.state.params.changeDisplayMode(newDisplayMode);
                            this.setState((previousState) => {
                                return {
                                    ...previousState,
                                    display_mode: newDisplayMode,
                                }
                            })

                        }}
                    >
                        <Image
                            source={this.state.display_mode == 'detail' ? detail : grid}
                            style={{ width: 26, height: 26 }}
                        />
                    </TouchableOpacity>
                    : <View style={{ width: 26 }} />}
            </View>
        );
    }
}