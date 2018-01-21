
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableOpacity, Dimensions
} from 'react-native';
const starChecked = require('../images/star_checked.png');
const startUnchecked = require('../images/star_unchecked.png');
var { height, width } = Dimensions.get('window');

export default class DetailItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <View
                style={styles.item}
            >
                <View
                    style={styles.row1}
                >
                    <Text
                        style={styles.title}
                    >Death Note</Text>
                    <TouchableOpacity
                        onPress={() => this.setState({ checked: !this.state.checked })}
                    >
                        <Image
                            source={this.state.checked ? starChecked : startUnchecked}
                            style={styles.star}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.directionRow}
                >
                    <Image
                        source={require('../images/default_avatar.png')}
                        style={styles.image}
                    ></Image>
                    <View style={{ paddingLeft: 10 }}>
                        <View
                            style={[styles.directionRow, { marginBottom: 10, marginTop: 4 }]}
                        >
                            <Text style={styles.normalText}>Realease date:  </Text>
                            <Text style={styles.importantText}> 2017 - 08 - 25</Text>
                        </View>
                        <View
                            style={[styles.directionRow, { marginBottom: 25 }]}
                        >
                            <Text style={styles.normalText}>Rating:  </Text>
                            <Text style={styles.importantText}>4.6/10</Text>
                        </View>
                        <Text style={styles.importantText}>Overview:</Text>
                        <Text style={[styles.normalText, { width: width * 3 / 5 - 20 }]}>A young man comes to possess a supernatural notebook, the Death Note...</Text>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    row1: {
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5
    },
    directionRow: {
        flexDirection: 'row'
    }
    ,
    title: {
        fontSize: 20, fontWeight: 'bold', color: '#000000'
    },
    star: {
        height: 24, width: 24
    },
    image: {
        height: width * 2 / 5, width: width * 2 / 5
    },
    item: {
        marginLeft: 10, marginTop: 10, marginRight: 10, paddingBottom: 5,
        borderBottomWidth: 1, borderBottomColor: 'cyan'
    },
    importantText: {
        color: 'red'
    },
    normalText: {
        color: 'black'
    }
});