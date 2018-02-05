
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
                                    // alert('No')
                                }
                            },
                            {
                                text: 'OK',
                                onPress: () => {
                                    this.props.deleteReminderMovies()
                                    // alert('Deleted successful')
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
            <Swipeout {...swipeoutConfigs}>
                <View
                    style={styles.item}
                >
                    <Image
                        source={{ uri: 'https://image.tmdb.org/t/p/w185/' + details.poster_path }}
                        style={styles.image}
                    ></Image>
                    <View
                        style={styles.rightBlock}
                    >
                        <Text style={styles.normalText} numberOfLines={1}>{details.title} - {details.vote_average}/10</Text>
                        <Text style={styles.normalText}>2017-09-12 10:06</Text>
                        {/*TODO: what inside this text */}
                    </View>
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
        height: width * 3 / 10, width: width * 3 / 10
    },
    rightBlock: {
        margin: 10, justifyContent: 'space-around'
    }
});