
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList, RefreshControl, TouchableOpacity, Dimensions
} from 'react-native';
import ReminderItem from './ReminderItem';

var { height, width } = Dimensions.get('window');

export default class Reminder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reminderMovies: [],
            refreshing: false,
        }
    }

    static navigationOptions = ({ navigation }) => {
        let header = (
            <View
                style={{
                    alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'space-between', backgroundColor: '#5564B1',
                    height: 50, paddingLeft: 10, paddingRight: 10
                }}
            >

                <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                    onPress={() => { navigation.goBack() }}>
                    <Image
                        source={require('../images/left_arrow.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text
                        style={{ fontSize: 20, color: 'white' }}
                    >Settings</Text>
                </TouchableOpacity>

                <Text
                    style={{ fontSize: 20, color: 'white' }}
                >Reminder</Text>
                <View style={{ width: 80 }}></View>
            </View>
        );
        return { header };
    }

    render() {
        return (
            <FlatList
                // refreshing={this.state.refreshing}
                // onRefresh={() => {
                // }}
                // data={this.state.reminderMovies}
                data={['a', 'b']}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <ReminderItem />}
            />
        );
    }
}