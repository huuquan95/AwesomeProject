
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList
} from 'react-native';
import Header from './Header';
import DetailItem from './DetailItem';

export default class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        }
    }

    static navigationOptions = ({ navigation }) => {

        let header = (<Header navigation={navigation} title={'Favorites'} isShowListIcon={false} />)
        // let headerBackTitle = 'Settings';

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

                data={['a', 'b']}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) =>
                    // <DetailItem details={item} navigation={this.props.navigation} />
                    <DetailItem />
                }
            />
        );
    }
}