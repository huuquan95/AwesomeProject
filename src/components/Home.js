
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList, RefreshControl, TouchableOpacity
} from 'react-native';
import DetailItem from './DetailItem';
import Header from './Header';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popularMovies: [],
            refreshing: false,
            pageLoading: 1,
        }
    }

    static navigationOptions = ({ navigation }) => {
        const { params = { title: 'Popular' } } = navigation.state;

        let header = (<Header navigation={navigation} title={params.title} />)

        return { header };
    }

    fetchData() {
        var { params = { type: 'popular' } } = this.props.navigation.state;
        url = "https://api.themoviedb.org/3/movie/" + params.type + "?api_key=0267c13d8c7d1dcddb40001ba6372235";

        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                this.setState((previousState) => {
                    return {
                        ...previousState,
                        refreshing: false,
                        pageLoading: 2,
                        popularMovies: res.results
                    }
                })
            })
    }

    componentWillMount() {
        this.fetchData();
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
                    this.fetchData()
                }}

                data={this.state.popularMovies}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) =>
                    <DetailItem details={item} navigation={this.props.navigation} />
                }
            />
        );
    }
}