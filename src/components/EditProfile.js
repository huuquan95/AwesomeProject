
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image,
    TouchableOpacity, Dimensions, Alert, TextInput, AsyncStorage
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

    getInfo = async () => {
        try {
            let name = await AsyncStorage.getItem('name');
            this.setState({ name: name });
            let date = await AsyncStorage.getItem('date');
            this.setState({ date: date });
            let email = await AsyncStorage.getItem('email');
            this.setState({ email: email });
        } catch (err) { console.log('Err GetInfo: ', err) }
    }

    saveInfo = async () => {

        try {
            await AsyncStorage.setItem('name', this.state.name)
        } catch (err) {
            console.log('Edit Profile Save name: ', err)
        }

        try {
            await AsyncStorage.setItem('date', this.state.date)
        } catch (err) {
            console.log('Edit Profile Save date: ', err)
        }

        try {
            await AsyncStorage.setItem('email', this.state.email)
        } catch (err) {
            console.log('Edit Profile Save email: ', err)
        }
    }

    componentWillMount() {
        this.getInfo()
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
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <View
                    style={styles.containerInside}
                >
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Tabs') }}
                        style={styles.cancleButton}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                ImagePicker.launchImageLibrary(options, (response) => {
                                    if (response.didCancel) {
                                        console.log('User cancelled image picker');
                                    }
                                    else if (response.error) {
                                        console.log('ImagePicker Error: ', response.error);
                                    }
                                    else if (response.customButton) {
                                        console.log('User tapped custom button: ', response.customButton);
                                    }
                                    else {
                                        let source = { uri: response.uri };
                                        console.log('uri: ', source)
                                        this.setState({
                                            avatarSource: source
                                        });
                                    }
                                });
                            }}
                        >
                            <Image
                                source={
                                    this.state.avatarSource == null ?
                                        require(`../images/default_avatar.png`)
                                        : this.state.avatarSource}
                                style={styles.avatar}
                            />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.name}
                            onChangeText={(text) => this.setState({ name: text })}
                            value={this.state.name} />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.saveInfo()
                            this.props.navigation.navigate('Tabs')
                        }}
                        style={styles.doneButton}>
                        <Text style={styles.buttonText}>Done</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={this._showDateTimePicker}
                    style={styles.infoItem}>
                    <Image
                        source={require('../images/birthday.png')}
                        style={styles.icon}
                    />
                    <Text>{this.state.date}</Text>
                </TouchableOpacity>

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

                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <RadioButton
                            outerCircleColor='black'
                            innerCircleColor='black'
                            currentValue={this.state.isMale}
                            value={0}
                            onPress={this.handleOnPress.bind(this)}
                        />
                        <Text style={{ marginRight: 50 }}>Male</Text>

                        <RadioButton
                            outerCircleColor='black'
                            innerCircleColor='black'
                            currentValue={this.state.isMale}
                            value={1}
                            onPress={this.handleOnPress.bind(this)}
                        />
                        <Text>Female</Text>
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
    container: {
        marginTop: 25, marginLeft: 10, marginRight: 10
    },
    containerInside: {
        flexDirection: 'row', justifyContent: 'space-between',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    cancleButton: {
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: "#20BCBC",
        height: 35, width: 80,
        borderRadius: 10
    },
    buttonText: {
        color: 'white', fontWeight: 'bold', fontSize: 16
    },
    avatar: {
        width: width / 2, height: width / 2,
        borderRadius: width / 4
    },
    name: {
        fontWeight: 'bold', textAlign: 'center', marginTop: 10
    },
    doneButton: {
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: "#057AFF",
        height: 35, width: 80,
        borderRadius: 10
    },
    infoItem: {
        flexDirection: 'row', alignItems: 'center', margin: 5
    }
});