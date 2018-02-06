
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, Dimensions, ScrollView, TouchableOpacity, AsyncStorage
} from 'react-native';

import { connect } from 'react-redux';

var { height, width } = Dimensions.get('window');

export class DrawerSlide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMale: true,
            date: "01/01/2001",
            name: 'Your name',
            email: 'Your email',
        }
    }

    getInfo = async () => {
        try {
            let name = await AsyncStorage.getItem('name');
            this.setState({ name: name });
        } catch (err) { console.log('Err Name: ', err) }
    }

    componentDidUpdate() {
        this.getInfo()
    }

    componentWillMount() {
        this.getInfo()
    }

    render() {
        return (
            <ScrollView
                style={{ marginTop: 25, marginLeft: 10, marginRight: 10 }}
            >
                <View
                    style={{ alignItems: 'center' }}
                >
                    <TouchableOpacity>
                        <Image
                            source={require('../images/default_avatar.png')}
                            style={{
                                width: width / 2, height: width / 2,
                                borderRadius: width / 4
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>{this.state.name}</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Image
                        source={require('../images/birthday.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginLeft: 10 }}>{this.state.date}</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Image
                        source={require('../images/email.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginLeft: 10 }}>{this.state.email}</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Image
                        source={require('../images/gender.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginLeft: 10 }}>{this.state.isMale == true ? 'Male' : 'Female'}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("EditProfile")
                    }}
                    style={{
                        alignSelf: 'center', alignItems: 'center', justifyContent: 'center',
                        backgroundColor: "#394AA5",
                        height: 35, width: 80,
                        borderRadius: 10, marginBottom: 15
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Edit</Text>
                </TouchableOpacity>

                {
                    this.props.reminderMovies.length != 0 ?
                        <Text style={{ fontWeight: 'bold' }}>Reminder List:</Text>
                        : <View />
                }
                {
                    this.props.reminderMovies.length >= 1 ?
                        <View style={{ marginTop: 5, padding: 5, backgroundColor: '#20BCBC' }}>
                            <Text>{this.props.reminderMovies[0].title} - {this.props.reminderMovies[0].vote_average}/10</Text>
                            <Text>2017-09-02 10:06</Text>
                        </View>
                        : <View />
                }
                {
                    this.props.reminderMovies.length >= 2 ?
                        <View style={{ marginTop: 5, padding: 5, backgroundColor: '#20BCBC' }}>
                            <Text>{this.props.reminderMovies[1].title} - {this.props.reminderMovies[1].vote_average}/10</Text>
                            <Text>2017-09-02 10:06</Text>
                        </View>
                        : <View />
                }
                {
                    this.props.reminderMovies.length != 0 ?
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Reminder")
                            }}
                            style={{
                                alignSelf: 'center', alignItems: 'center', justifyContent: 'center',
                                backgroundColor: "#394AA5",
                                height: 35, width: 80,
                                borderRadius: 10,
                                marginTop: 10, marginBottom: 5
                            }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Show All</Text>
                        </TouchableOpacity>
                        : <View />
                }
                <Text style={{ alignSelf: 'center' }}>CopyRight@Enclave 2018</Text>
            </ScrollView >
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        reminderMovies: state.reminderMovies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerSlide);