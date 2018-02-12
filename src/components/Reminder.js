
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, FlatList, RefreshControl, TouchableOpacity, Dimensions
} from 'react-native';
import ReminderItem from './ReminderItem';
import { connect } from 'react-redux';

var { height, width } = Dimensions.get('window');

export class Reminder extends Component {

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
                >All Reminders</Text>
                <View style={{ width: 80 }}></View>
            </View>
        );
        return { header };
    }

    render() {
        return (
            <FlatList
                data={this.props.reminderMovies}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <ReminderItem details={item} />}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reminderMovies: state.reminderMovies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Reminder);