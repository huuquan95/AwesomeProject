
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList
} from 'react-native';
import Header from './Header';
import DetailItem from './DetailItem';

import { connect } from 'react-redux';

export class Favorites extends Component {

    static navigationOptions = ({ navigation }) => {

        let header = (<Header navigation={navigation} title={'Favorites'} isShowListIcon={false} />)

        return { header };
    }

    render() {
        return (
            <FlatList
                data={this.props.favoriteMovies}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <DetailItem details={item} navigation={this.props.navigation} />}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favoriteMovies: state.favoriteMovies
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);