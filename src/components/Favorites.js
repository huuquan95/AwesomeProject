
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList, TextInput
} from 'react-native';
import Header from './Header';
import DetailItem from './DetailItem';
import Search from 'react-native-search-box';
import realm from '../databases/allSchemas';
import { queryAllFavoriteMovies } from '../databases/allSchemas';

import { loadFavoriteMovies } from '../actions';
import { connect } from 'react-redux';

export class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favoriteMoviesFilter: []
        }
        
        this.loadData();
        realm.addListener('change', () => {
            this.loadData();
        });
    }

    loadData() {
        queryAllFavoriteMovies()
            .then(res =>
                res.map(movie => {
                    return {
                        id: movie.id,
                        title: movie.title,
                        poster_path: movie.poster_path,
                        release_date: movie.release_date,
                        vote_average: parseFloat(movie.vote_average).toFixed(1),
                        overview: movie.overview
                    }
                })
            )
            .then(res => {
                this.props.loadFavoriteMovies(res)
            })
            .catch(err => console.log(err))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ favoriteMoviesFilter: nextProps.favoriteMovies })
    }

    static navigationOptions = ({ navigation }) => {

        let header = (<Header navigation={navigation} title={'Favorites'} isShowListIcon={false} />)

        return { header };
    }

    _onChangeText = async (text) => {
        favoriteMoviesFilter =
            await this.props.favoriteMovies
                .filter(movie => (movie.title.toLowerCase().indexOf(text.toLowerCase()) != -1))

        this.setState({ favoriteMoviesFilter: favoriteMoviesFilter })
    }

    _setFavoriteMoviesFilter = () => {
        this.setState({ favoriteMoviesFilter: this.props.favoriteMovies })
    }

    render() {
        return (
            <View>
                {
                    this.props.favoriteMovies.length <= 2
                        ? <View />
                        : <Search
                            backgroundColor="#C9C9CE"
                            placeholder=" "
                            onChangeText={this._onChangeText}
                            onDelete={this._setFavoriteMoviesFilter}
                            onCancel={this._setFavoriteMoviesFilter}
                            inputStyle={{ textAlign: 'center' }}
                        />
                }
                < FlatList
                    style={{ marginBottom: 50 }}
                    data={this.state.favoriteMoviesFilter}
                    keyExtractor={(item, index) => index
                    }
                    renderItem={({ item }) => <DetailItem details={item} navigation={this.props.navigation} />}
                />
            </View >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favoriteMovies: state.favoriteMovies,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadFavoriteMovies: (favoriteMovies) => {
            dispatch(loadFavoriteMovies(favoriteMovies))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);