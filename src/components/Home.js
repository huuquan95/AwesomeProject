
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

var { height, width } = Dimensions.get('window');

export default class Home extends Component {

    constructor(props) {
        super(props);
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

    componentWillMount() {
        let { navigation } = this.props;
        let { params } = navigation.state;

        navigation.setParams({
            title: (params != undefined) ? params.title : "Popular",
            type: (params != undefined) ? params.type : "popular",
            changeDisplayMode: this._changeDisplayMode
        })

        this.fetchData();
    }

    _changeDisplayMode = (display_mode = 'detail') => {
        this.setState((previousState) => {
            return {
                ...previousState,
                display_mode: display_mode
            }
        })
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
                        movies: res.results
                    }
                })
            })
    }

    render() {
        if (this.state.display_mode == 'detail')
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

                    data={this.state.movies}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) =>
                        <DetailItem details={item} navigation={this.props.navigation} />
                    }
                />
            );
        else
            return (
                <GridView
                    itemDimension={width / 2 - 15}
                    items={this.state.movies}
                    style={{ margin: Platform.OS == 'ios' ? 5 : 0 }}
                    renderItem={item => (
                        <GridItem details={item} navigation={this.props.navigation} />
                    )}
                />
            );
    }
}