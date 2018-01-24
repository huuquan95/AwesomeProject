
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList, RefreshControl, TouchableOpacity
} from 'react-native';
import DetailItem from './DetailItem';
import Header from './Header';

export default class TopRatedMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popularMovies: [],
            refreshing: false,
            pageLoading: 1
        }
    }

    static navigationOptions = ({ navigation }) => {
        // const { params = {} } = navigation.state;

        let header = (<Header navigation={navigation} title={'Top Rated'} />)

        let headerBackTitle = 'Top Rated';

        return { header, headerBackTitle };
    }

    fetchData() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0267c13d8c7d1dcddb40001ba6372235')
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
            <View>
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
            </View>
        );
    }
}