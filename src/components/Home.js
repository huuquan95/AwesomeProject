
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList, RefreshControl, TouchableOpacity, Dimensions
} from 'react-native';
import GridView from 'react-native-super-grid';
import DetailItem from './DetailItem';
import GridItem from './GridItem';
import Header from './Header';

import { loadMovies } from '../actions';
import { connect } from 'react-redux';

var { height, width } = Dimensions.get('window');

export class Home extends Component {

    constructor(props) {
        super(props);
        this.props.loadMovies();
        this.state = {
            movies: [],
            refreshing: false,
            pageLoading: 1,
            display_mode: 'detail'
        }
    }

    static navigationOptions = ({ navigation }) => {

        const { params = { title: 'Popular' } } = navigation.state;
        let header = (<Header navigation={navigation} title={params.title} />)

        return { header };
    }

    _changeDisplayMode = (display_mode = 'detail') => {
        this.setState((previousState) => {
            return {
                ...previousState,
                display_mode: display_mode
            }
        })
    }

    render() {
        if (this.props.display_mode == 'detail')
            return (
                <FlatList
                    refreshing={this.state.refreshing}

                    onRefresh={() => {
                        this.setState((previousState) => {
                            return {
                                ...previousState, refreshing: true
                            }
                        })
                        //this.fetchData()
                    }}

                    data={this.props.movies}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => <DetailItem details={item} navigation={this.props.navigation} />}
                />
            );
        else
            return (
                <GridView
                    itemDimension={width / 2 - 25}
                    items={this.props.movies}
                    style={{ margin: Platform.OS == 'ios' ? 5 : 0 }}
                    renderItem={item => (
                        <GridItem details={item} navigation={this.props.navigation} />
                    )}
                />
            );
    }
}

const mapStateToProps = (state) => {
    // console.log('Home favoriteMovies ', state.favoriteMovies)
    return {
        movies: state.movies,
        display_mode: state.display_mode,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: () => {

            url = "https://api.themoviedb.org/3/movie/popular?api_key=0267c13d8c7d1dcddb40001ba6372235";

            fetch(url)
                .then((response) => response.json())
                .then((res) => {
                    dispatch(loadMovies(res.results));
                })
                .catch((err) => {
                    console.log(err);
                    dispatch(loadMovies([]))
                })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);