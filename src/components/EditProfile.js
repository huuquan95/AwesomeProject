
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image,
    TouchableOpacity, Dimensions
} from 'react-native';
import RadioButton from 'radio-button-react-native';
var { height, width } = Dimensions.get('window');

var ImagePicker = require('react-native-image-picker');

// More info on all the options is below in the README...just some common use cases shown here
var options = {
    title: 'Select Avatar',
    customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleOnPress(value) {
        this.setState({ value: value })
    }

    render() {
        return (
            <View
                style={{ marginTop: Platform.OS == 'ios' ? 34 : 0 }}
            >
                <View
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        marginLeft: 10, marginRight: 10
                    }}
                >
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Tabs') }}
                        style={{
                            alignItems: 'center', justifyContent: 'center',
                            backgroundColor: "red",
                            height: 35, width: 80,
                            borderRadius: 10
                        }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Cancel</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                ImagePicker.launchImageLibrary(options, (response) => {
                                    // Same code as in above section!
                                });
                            }}
                        >
                            <Image
                                source={require('../images/default_avatar.png')}
                                style={{
                                    width: width / 2, height: width / 2,
                                    borderRadius: width / 4
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Quan (Quinto) H. Dinh</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Tabs') }}
                        style={{
                            alignItems: 'center', justifyContent: 'center',
                            backgroundColor: "blue",
                            height: 35, width: 80,
                            borderRadius: 10
                        }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Done</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                    <Image
                        source={require('../images/birthday.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginLeft: 10 }}>26/11/1995</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                    <Image
                        source={require('../images/email.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginLeft: 10 }}>quinto@enclave.vn</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>

                    <Image
                        source={require('../images/gender.png')}
                        style={{ width: 24, height: 24 }}
                    />

                    <View
                        style={{ flexDirection: 'row', flex: 2 }}
                    >

                        <RadioButton
                            currentValue={this.state.value}
                            value={0}
                            onPress={this.handleOnPress.bind(this)}
                        >
                            <Text>Male</Text>
                        </RadioButton>

                        <RadioButton
                            currentValue={this.state.value}
                            value={1}
                            onPress={this.handleOnPress.bind(this)}
                        >
                            <Text>Female</Text>
                        </RadioButton>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});