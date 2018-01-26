
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image,
    TouchableOpacity, Dimensions, Alert, TextInput
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioButton from 'radio-button-react-native';
var { height, width } = Dimensions.get('window');

var ImagePicker = require('react-native-image-picker');

var options = {
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMale: 0,
            isDateTimePickerVisible: false,
            date: "11/26/1995",
            name: 'Quan (Quinto) H. Dinh',
            email: 'quinto@enclave.vn',
        }
    }

    handleOnPress(isMale) {
        this.setState({ isMale: isMale })
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState((previousState) => {
            return {
                ...previousState,
                date: ((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear())
            }
        })
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View
                style={{ marginTop: 25, marginLeft: 10, marginRight: 10 }}
            >
                <View
                    style={{
                        flexDirection: 'row', justifyContent: 'space-between',

                    }}
                >
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Tabs') }}
                        style={{
                            alignItems: 'center', justifyContent: 'center',
                            backgroundColor: "#20BCBC",
                            height: 35, width: 80,
                            borderRadius: 10
                        }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Cancel</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                ImagePicker.launchImageLibrary(options, (response) => {
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
                        <TextInput
                            style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}
                            onChangeText={(text) => this.setState({ name: text })}
                            value={this.state.name} />
                    </View>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Tabs') }}
                        style={{
                            alignItems: 'center', justifyContent: 'center',
                            backgroundColor: "#057AFF",
                            height: 35, width: 80,
                            borderRadius: 10
                        }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Done</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={this._showDateTimePicker}
                    style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                    <Image
                        source={require('../images/birthday.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={{ marginLeft: 10 }}>{this.state.date}</Text>
                </TouchableOpacity>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                    <Image
                        source={require('../images/email.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                    <Image
                        source={require('../images/gender.png')}
                        style={{ width: 24, height: 24 }}
                    />

                    <View
                        style={{ flexDirection: 'row' }}
                    >

                        <RadioButton
                            currentValue={this.state.isMale}
                            value={0}
                            onPress={this.handleOnPress.bind(this)}
                        >
                            <Text>Male</Text>
                        </RadioButton>

                        <RadioButton
                            currentValue={this.state.isMale}
                            value={1}
                            onPress={this.handleOnPress.bind(this)}
                        >
                            <Text>Female</Text>
                        </RadioButton>

                    </View>
                </View>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode={'date'}
                    date={new Date(this.state.date)}
                />
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