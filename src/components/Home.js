
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList, RefreshControl, TouchableOpacity
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

    static navigationOptions = ({ navigation }) => {
        // const { params = {} } = navigation.state;

        let header = (
            <View
                style={{
                    alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'space-between', backgroundColor: '#5564B1',
                    padding: 12
                }}
            >

                <TouchableOpacity
                    onPress={() => { navigation.navigate('DrawerOpen') }}>
                    <Image
                        source={require('../images/menu.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, color: 'white' }}>Popular</Text>

                <TouchableOpacity>
                    <Image
                        source={require('../images/grid.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>

            </View>
        )

        let headerBackTitle = 'Popular';

        return { header, headerBackTitle };
    }

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

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});