
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
                refreshing={this.state.refreshing}

                onRefresh={() => {
                    this.setState((previousState) => {
                        return {
                            ...previousState, refreshing: true
                        }
                    })
                }}

                data={this.props.favoriteMovies}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) =>
                // <DetailItem details={item} navigation={this.props.navigation} />
                {
                    console.log('item', item)
                    return (<DetailItem />)
                }
                }
            />
        );
    }
}

const mapStateToProps = (state) => {
    //console.log('favorite ', state.favoriteMovies)
    // state.favoriteMovies.forEach(id => {
    //     console.log('id ', id)
    // });
    return {
        favoriteMovies: state.favoriteMovies
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);