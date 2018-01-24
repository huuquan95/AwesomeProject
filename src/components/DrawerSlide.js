
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';

var { height, width } = Dimensions.get('window');

export default class DrawerSlide extends Component {
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
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Quan (Quinto) H. Dinh</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Image
                        source={require('../images/birthday.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginLeft: 10 }}>26/11/1995</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Image
                        source={require('../images/email.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginLeft: 10 }}>quinto@enclave.vn</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Image
                        source={require('../images/gender.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginLeft: 10 }}>Male</Text>
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

                <Text style={{ fontWeight: 'bold' }}>Reminder List:</Text>

                <View style={{ marginTop: 5, padding: 5, backgroundColor: '#20BCBC' }}>
                    <Text>The Dark Tower - 2017 - 5.6/10</Text>
                    <Text>2017-09-02 10:06</Text>
                </View>
                <View style={{ marginTop: 5, padding: 5, backgroundColor: '#20BCBC' }}>
                    <Text>Ananbelle: Creation - 2017 - 6.4/10</Text>
                    <Text>2017-09-03 10:06</Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("EditProfile")
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
                <Text style={{ alignSelf: 'center' }}>CopyRight@Enclave 2018</Text>
            </ScrollView >
        );
    }
}