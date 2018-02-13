
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableOpacity, Dimensions, Alert
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import { deleteReminderMovies } from '../actions/index'

var { height, width } = Dimensions.get('window');

export class ReminderItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            opened: false,
        };
    }
    formatDate(date) {
        let month = date.getMonth() + 1;
        return date.getFullYear() + "-"
            + (month < 10 ? ("0" + month) : month) + "-"
            + date.getDate() + " "
            + date.getHours() + ":" + date.getMinutes()
    }

    render() {
        const swipeoutConfigs = {
            backgroundColor: 'white',
            autoClose: true,
            onClose: () => { },
            onOpen: () => { },
            right: [
                {
                    onPress: () => {
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete this reminder?',
                            [{
                                text: 'Cancel',
                                onPress: () => {
                                }
                            },
                            {
                                text: 'OK',
                                onPress: () => {
                                    this.props.deleteReminderMovies()
                                }
                            }]
                        )
                    },
                    text: 'Delete',
                    type: 'delete'
                }
            ]
        }
        var { details } = this.props;
        return (
            <Swipeout
                {...swipeoutConfigs}
                openRight={this.state.opened}
            >
                <View
                    style={styles.item} >
                    <Image
                        source={{ uri: 'https://image.tmdb.org/t/p/w185/' + details.poster_path }}
                        style={styles.image}
                    ></Image>

                    <View
                        style={styles.rightBlock}
                    >
                        <Text style={styles.normalText} numberOfLines={1}>
                            {details.title.length >= 18 ? details.title.slice(0, 18) + "..." : details.title}
                            - {details.vote_average.toFixed(1)}/10</Text>
                        <Text style={styles.normalText}>{this.formatDate(this.props.details.reminderTime)}</Text>
                    </View>
                    <TouchableOpacity
                        style={{ alignSelf: 'center', position: 'absolute', right: 5 }}
                        onPress={() => {
                            this.setState({ opened: true });
                        }}
                    >
                        <Image
                            source={require('../images/right_arrow.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </TouchableOpacity>
                </View>
            </Swipeout>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteReminderMovies: () => {
            dispatch(deleteReminderMovies(props.details))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReminderItem);

const styles = StyleSheet.create({
    item: {
        marginLeft: 10, marginTop: 10, marginRight: 10, paddingBottom: 10,
        flexDirection: 'row',
        borderBottomColor: 'cyan', borderBottomWidth: 0.5,
    },
    normalText: {
        fontSize: 18
    },
    image: {
        height: width / 4, width: width / 4
    },
    rightBlock: {
        margin: 10, justifyContent: 'space-around'
    }
});