
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
                        style={styles.title} numberOfLines={1}
                    >{this.props.title}</Text>
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
                        source={{ uri: 'https://image.tmdb.org/t/p/w185/' + this.props.poster_path }}
                        style={styles.image}
                    ></Image>
                    <View style={{ paddingLeft: 10 }}>
                        <View
                            style={[styles.directionRow, { marginBottom: 10, marginTop: 4 }]}
                        >
                            <Text style={styles.normalText}>Realease date:  </Text>
                            <Text style={styles.importantText}> {this.props.release_date}</Text>
                        </View>
                        <View
                            style={[styles.directionRow, { marginBottom: 25 }]}
                        >
                            <Text style={styles.normalText}>Rating:  </Text>
                            <Text style={styles.importantText}>{this.props.vote_average}/10</Text>
                        </View>
                        <Text style={styles.importantText}>Overview:</Text>
                        <Text style={[styles.normalText, { width: width * 3 / 5 - 20 }]} numberOfLines={3} >
                            {this.props.overview}
                        </Text>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    row1: {
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5,
        width: width - 20
    },
    directionRow: {
        flexDirection: 'row'
    }
    ,
    title: {
        fontSize: 20, fontWeight: 'bold', color: '#000000',
        width: width - 48
    },
    star: {
        height: 24, width: 24
    },
    image: {
        height: width * 2 / 5, width: width * 2 / 5
    },
    item: {
        marginLeft: 10, marginTop: 10, marginRight: 10, paddingBottom: 5,
        borderBottomWidth: 0.5, borderBottomColor: 'cyan'
    },
    importantText: {
        color: 'red'
    },
    normalText: {
        color: 'black'
    }
});