
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, Dimensions, ScrollView, TouchableOpacity, AsyncStorage
} from 'react-native';
import realm from '../databases/allSchemas';
import { queryAllInfos } from '../databases/allSchemas';

import { connect } from 'react-redux';

var { height, width } = Dimensions.get('window');

export class DrawerSlide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMale: 1,
            date: "01/01/2011",
            name: 'David John',
            email: 'john@example.com',
        }
        this.loadData();
        realm.addListener('change', () => {
            this.loadData();
        });
    }

    loadData() {
        queryAllInfos()
            .then(res => {
                if (res.length != 0) {
                    let info = res[0]
                    let date = info.date
                    this.setState({
                        name: info.name,
                        date: (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear(),
                        isMale: info.isMale,
                        email: info.email,
                        avatarSource: info.avatarSource
                    })
                }
            })
            .catch(err => console.log(err))
    }

    formatTitle(movie) {
        return (movie.title.length >= 18 ? movie.title.slice(0, 18) + "..." : movie.title)
            + " - "
            + movie.release_date.slice(0, 4)
            + " - " + movie.vote_average
            + "/10"
    }

    render() {
        this.props.reminderMovies.sort(function (a, b) {
            a = new Date(a.reminderTime);
            b = new Date(b.reminderTime);
            return a > b ? 1 : a < b ? -1 : 0;
        })
        return (
            <View
                style={styles.scrollView}
            >
                <View
                    style={{ alignItems: 'center' }}
                >
                    <TouchableOpacity
                    >
                        {/* <Image
                            source={require('../images/default_avatar.png')}
                            style={styles.avatar}
                        /> */}
                        <Image
                            source={
                                this.state.avatarSource == "" ?
                                    require(`../images/default_avatar.png`)
                                    : { uri: this.state.avatarSource }}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                    <Text style={styles.name}>{this.state.name}</Text>
                </View>

                <View
                    style={styles.infoItem}>
                    <Image
                        source={require('../images/birthday.png')}
                        style={styles.icon}
                    />
                    <Text>{this.state.date}</Text>
                </View>

                <View
                    style={styles.infoItem}>
                    <Image
                        source={require('../images/email.png')}
                        style={styles.icon}
                    />
                    <Text>{this.state.email}</Text>
                </View>

                <View
                    style={styles.infoItem}>
                    <Image
                        source={require('../images/gender.png')}
                        style={styles.icon}
                    />
                    <Text>{this.state.isMale == true ? 'Male' : 'Female'}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("EditProfile")
                    }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>

                {
                    this.props.reminderMovies.length != 0 ?
                        <Text style={{ fontWeight: 'bold' }}>Reminder List:</Text>
                        : <View />
                }
                {
                    this.props.reminderMovies.length >= 1 ?
                        <View style={styles.reimnderItem}>
                            <Text>{this.formatTitle(this.props.reminderMovies[0])}</Text>
                            <Text>{this.props.reminderMovies[0].reminderTime}</Text>
                        </View>
                        : <View />
                }
                {
                    this.props.reminderMovies.length >= 2 ?
                        <View style={styles.reimnderItem}>
                            <Text>{this.formatTitle(this.props.reminderMovies[1])}</Text>
                            <Text>{this.props.reminderMovies[1].reminderTime}</Text>
                        </View>
                        : <View />
                }
                {
                    this.props.reminderMovies.length != 0 ?
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Reminder")
                            }}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Show All</Text>
                        </TouchableOpacity>
                        : <View />
                }
                <Text style={styles.bottomText}>CopyRight@Enclave 2018</Text>
            </View >
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

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 10,
    },
    avatar: {
        marginTop: height / 20,
        width: width / 2, height: width / 2,
        borderRadius: width / 4
    },
    name: {
        marginTop: 10, fontWeight: 'bold'
    },
    infoItem: {
        flexDirection: 'row', alignItems: 'center', marginTop: 10,
    },
    icon: {
        width: 24, height: 24, marginRight: 10
    },
    button: {
        alignSelf: 'center', alignItems: 'center', justifyContent: 'center',
        backgroundColor: "#394AA5",
        height: 35, width: 80,
        marginTop: 5,
        borderRadius: 10, marginBottom: 15
    },
    buttonText: {
        color: 'white', fontWeight: 'bold', fontSize: 16
    },
    reimnderItem: {
        marginTop: 5, padding: 5, backgroundColor: '#20BCBC'
    },
    bottomText: {
        alignSelf: 'center', position: 'absolute', top: height * 19 / 20
    }
})