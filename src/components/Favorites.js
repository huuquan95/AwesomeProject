
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

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            movies: []
        }
    }

    static navigationOptions = ({ navigation }) => {

        let header = (<Header navigation={navigation} title={'Favorites'} isShowListIcon={false} />)

        return { header };
    }

    render() {
        return (
            <FlatList
                data={this.props.favoriteMovies}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                    return (<DetailItem details={item} />)
                }}
            />
        );
    }
}

const mapStateToProps = (state) => {
    console.log('favorite', state.favoriteMovies)
    return {
        favoriteMovies: state.favoriteMovies
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);