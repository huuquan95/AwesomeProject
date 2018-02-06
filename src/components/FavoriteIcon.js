import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';

import { connect } from 'react-redux';

export class FavoriteIcon extends Component {
    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                    source={require('../images/heart.png')}
                    style={{ height: 26, width: 26, tintColor: this.props.tintColor }}
                />
                {this.props.numberOfFavoriteMovies != 0 ?
                    <View style={{
                        position: 'absolute',
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                        left: 20, top: -15
                    }}>
                        <Text style={{ fontSize: 10, color: "white" }}>{this.props.numberOfFavoriteMovies}</Text>
                    </View>
                    : <View />
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        numberOfFavoriteMovies: state.favoriteMovies.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIcon);