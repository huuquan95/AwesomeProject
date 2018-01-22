
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableOpacity, Dimensions, Alert
} from 'react-native';
import Swipeout from 'react-native-swipeout';

var { height, width } = Dimensions.get('window');

export default class ReminderItem extends Component {

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
                                    alert('Deleted successful')
                                }
                            }]
                        )
                    },
                    text: 'Delete',
                    type: 'delete'
                }
            ]
        }
        return (
            <Swipeout {...swipeoutConfigs}>
                <View
                    style={styles.item}
                >
                    <Image
                        source={require('../images/default_avatar.png')}
                        style={styles.image}
                    ></Image>
                    <View
                        style={styles.rightBlock}
                    >
                        <Text style={styles.normalText}>The Dark Tower</Text>
                        <Text style={styles.normalText}>2017-09-12 10:06</Text>
                    </View>
                </View>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        marginLeft: 10, marginTop: 10, marginRight: 10, paddingBottom: 10,
        flexDirection: 'row',
        borderBottomColor: 'cyan', borderBottomWidth: 0.5,
    },
    normalText: {
        fontSize: 20
    },
    image: {
        height: width * 3 / 10, width: width * 3 / 10
    },
    rightBlock: {
        margin: 10, justifyContent: 'space-around'
    }
});