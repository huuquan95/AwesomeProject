
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList, RefreshControl
} from 'react-native';
import DetailItem from './DetailItem';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popularMovies: [],
            refreshing: false,
            pageLoading: 1
        }
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/home.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    fetchData() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0267c13d8c7d1dcddb40001ba6372235')
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
                renderItem={({ item }) => <DetailItem {...item} />}
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});