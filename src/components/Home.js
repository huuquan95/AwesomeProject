
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
import realm from '../databases/allSchemas';
import { queryAllReminderMovies } from '../databases/allSchemas';

import { loadMovies, loadMoreMovies, loadReminderMovies } from '../actions';
import { connect } from 'react-redux';

var { height, width } = Dimensions.get('window');

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }

        this.loadData();
        realm.addListener('change', () => {
            this.loadData();
        });
    }

    loadData() {
        queryAllReminderMovies()
            .then(res =>
                res.map(movie => {
                    return {
                        id: movie.id,
                        title: movie.title,
                        poster_path: movie.poster_path,
                        release_date: movie.release_date,
                        vote_average: parseFloat(movie.vote_average).toFixed(1),
                        reminderTime: movie.reminderTime
                    }
                })
            )
            .then(res => {
                this.props.loadReminderMovies(res)
            })
            .catch(err => console.log(err))
    }

    static navigationOptions = ({ navigation }) => {

        const { params = { title: 'Popular' } } = navigation.state;
        let header = (<Header navigation={navigation} title={params.title} />)

        return { header };
    }

    componentWillMount() {
        this.props.loadMovies(this.props.movieType);
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
                    onRefresh={() => { this.props.loadMovies(this.props.movieType) }}

                    onEndReachedThreshold={0.1}
                    onEndReached={() => { this.props.loadMoreMovies(this.props.page, this.props.movieType) }}

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
    return {
        movies: state.movies,
        display_mode: state.display_mode,
        movieType: state.movieType,
        page: state.page
    }
}

//TODO: when fetching data from API, you can optimize by getting only elements you need
const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: (movieType = "popular") => {
            url = "https://api.themoviedb.org/3/movie/" + movieType + "?api_key=0267c13d8c7d1dcddb40001ba6372235";

            fetch(url)
                .then((response) => response.json())
                .then((res) => {
                    dispatch(loadMovies(res.results))
                })
                .catch((err) => {
                    console.log(err);
                    dispatch(loadMovies([]))
                })
        },
        loadMoreMovies: (page, movieType) => {
            page = page + 1;

            url = "https://api.themoviedb.org/3/movie/" + movieType + "?api_key=0267c13d8c7d1dcddb40001ba6372235&page=" + page;

            fetch(url)
                .then((response) => response.json())
                .then((res) => {
                    dispatch(loadMoreMovies(res.results, page))
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        loadReminderMovies: (reminderMovies) => {
            dispatch(loadReminderMovies(reminderMovies))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);