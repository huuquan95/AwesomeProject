
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View, Image, TouchableOpacity, Dimensions
} from 'react-native';
import { insertFavoriteMovies, deleteFavoriteMovies, queryAllFavoriteMovies } from '../databases/allSchemas';

import { toggleFavoriteMovie } from '../actions';
import { connect } from 'react-redux';

const starChecked = require('../images/star_checked.png');
const starUnchecked = require('../images/star_unchecked.png');
var { height, width } = Dimensions.get('window');

export class DetailItem extends Component {

    toggleFavoriteMovie() {
        if (this.props.isFavorite) {
            deleteFavoriteMovies(this.props.details.id)
                .then()
                .catch(err => console.log(err))
        }
        else {
            let { details } = this.props;
            let movie = {
                id: details.id,
                title: details.title,
                poster_path: details.poster_path,
                release_date: details.release_date,
                vote_average: details.vote_average,
                overview: details.overview
            }

            insertFavoriteMovies(movie)
                .then(res => console.log('insertFavoriteMovie', res))
                .catch(err => console.log(err))
        }
    }

    render() {
        var {
            details = {
            id: 123456,
            title: '...',
            poster_path: '5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg',
            release_date: '...',
            vote_average: '...',
            overview: '...'
        },
            navigation } = this.props;

        return (
            <View style={styles.item}>
                <View style={styles.row1}>

                    <Text style={styles.title} numberOfLines={1} >
                        {details.title}
                    </Text>

                    <TouchableOpacity
                        onPress={() => {
                            if (this.props.isFavorite == true) {
                                Alert.alert(
                                    'Alert',
                                    'Are you sure you want to unfavorite this item?',
                                    [{ text: 'Cancel' },
                                    {
                                        text: 'OK',
                                        onPress: () => { this.toggleFavoriteMovie() }
                                    }]
                                )
                            }
                            else {
                                this.toggleFavoriteMovie()
                            }
                        }}
                    >
                        <Image
                            source={this.props.isFavorite ? starChecked : starUnchecked}
                            style={styles.star}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.directionRow}>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('MovieDetail', { details: this.props.details }) }}   >
                        <Image
                            source={{ uri: 'https://image.tmdb.org/t/p/w185/' + details.poster_path }}
                            style={styles.image}
                        ></Image>
                    </TouchableOpacity>

                    <View style={{ paddingLeft: 10 }}>

                        <View
                            style={[styles.directionRow, { marginBottom: 10, marginTop: 4 }]}
                        >
                            <Text style={styles.normalText}>Realease date:  </Text>
                            <Text style={styles.importantText}> {details.release_date}</Text>
                        </View>

                        <View
                            style={[styles.directionRow, { marginBottom: 25 }]}
                        >
                            <Text style={styles.normalText}>Rating:  </Text>
                            <Text style={styles.importantText}>{details.vote_average}/10</Text>
                        </View>

                        <Text style={styles.importantText}>Overview:</Text>

                        <Text style={[styles.normalText, { width: width * 3 / 5 - 20 }]} numberOfLines={3} >
                            {details.overview}
                        </Text>

                    </View>
                </View>
            </View >
        );
    }
}

const mapStateToProps = (state, props) => {

    return {
        isFavorite: state.favoriteMovies
            .map(movie => { return movie.id })
            .indexOf(props.details.id) != -1 ? true : false,
        favoriteMovies: state.favoriteMovies
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailItem);

const styles = StyleSheet.create({
    row1: {
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5,
        width: width - 20
    },
    directionRow: {
        flexDirection: 'row'
    },
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