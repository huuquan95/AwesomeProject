
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, Dimensions, TouchableOpacity
} from 'react-native';

var { height, width } = Dimensions.get('window');

export default class GridItem extends Component {

    render() {
        var {
            details = {
            title: '...',
            poster_path: '5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg',
            release_date: '...',
            vote_average: '...',
            overview: '...'
        },
            navigation } = this.props;

        return (
            <View
                style={{
                    margin: 5,
                }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('MovieDetail', { details: this.props.details }) }}   >
                    <Image
                        source={{ uri: 'https://image.tmdb.org/t/p/w185/' + details.poster_path }}
                        style={styles.image}
                    ></Image>
                    <Text style={styles.text} numberOfLines={2}>  {details.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: width / 2 - 15, width: width / 2 - 15
    },
    text: {
        color: 'black', fontSize: 20, fontWeight: 'bold',
        textAlign: 'center',
        height: 55, width: width / 2 - 15
    }
});