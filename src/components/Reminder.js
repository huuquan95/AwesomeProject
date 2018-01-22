
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList, RefreshControl
} from 'react-native';
import ReminderItem from './ReminderItem';

export default class Reminder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reminderMovies: [],
            refreshing: false,
        }
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