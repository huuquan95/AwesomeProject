
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableHighlight, TouchableOpacity, Dimensions, ScrollView,
    FlatList, Alert
} from 'react-native';

const starChecked = require('../images/star_checked.png');
const startUnchecked = require('../images/star_unchecked.png');
var { height, width } = Dimensions.get('window');

export default class MovieDatail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actors: [],
            checked: false
        }
    }

    static navigationOptions = ({ navigation }) => {
        let header = (
            <View
                style={{
                    alignItems: 'center', flexDirection: 'row',
                    justifyContent: 'space-between', backgroundColor: '#5564B1',
                    padding: 12
                }}
            >

                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}>
                    <Image
                        source={require('../images/left_arrow.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, color: 'white', width: width - 100, textAlign: 'center' }} numberOfLines={1}>{navigation.state.params.details.title}</Text>

                <TouchableOpacity></TouchableOpacity>
            </View>
        );
        return { header };
    }

    componentWillMount() {
        fetch('http://api.themoviedb.org/3/movie/' + this.props.navigation.state.params.details.id + '/credits?api_key=0267c13d8c7d1dcddb40001ba6372235')
            .then((response) => response.json())
            .then((res) => {
                this.setState((previousState) => {
                    return {
                        ...previousState,
                        actors: res.cast
                    }
                })
            })
    }

    render() {
        var { details } = this.props.navigation.state.params
        return (
            <ScrollView>
                <View style={styles.item}>

                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity
                            style={{
                                width: 24, height: 24,
                                marginTop: 10, marginLeft: 10, marginRight: 20, marginBottom: 20
                            }}
                            onPress={() => {
                                if (this.state.checked == true)
                                    Alert.alert(
                                        'Alert',
                                        'Are you sure you want to unfavorite this item?',
                                        [{ text: 'Cancel' },
                                        {
                                            text: 'OK',
                                            onPress: () => { this.setState({ checked: !this.state.checked }) }
                                        }]
                                    )
                                else
                                    this.setState({ checked: !this.state.checked });
                            }}
                        >
                            <Image
                                source={this.state.checked ? starChecked : startUnchecked}
                                style={styles.star}
                            />
                        </TouchableOpacity>

                        <View style={{ justifyContent: 'space-around' }}>
                            <Text>Release date: <Text style={styles.importantText}>{details.release_date}</Text></Text>
                            <Text>Rating:  <Text style={styles.importantText}>{details.vote_average}</Text></Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center' }}>

                            <Image
                                source={{ uri: 'https://image.tmdb.org/t/p/w185/' + details.poster_path }}
                                style={styles.image}
                            />

                            <TouchableOpacity
                                style={{
                                    width: 120, paddingTop: 5, paddingBottom: 5, marginTop: 15,
                                    backgroundColor: '#415FFF', borderRadius: 10,
                                }}
                            >

                                <Text
                                    style={{
                                        color: 'white', fontSize: 20, textAlign: 'center'
                                    }}
                                >
                                    REMINDER
                            </Text>

                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingLeft: 10, paddingRight: 10 }}>

                            <Text style={styles.importantText}>Overview:</Text>

                            <View
                                style={{
                                    height: width * 6 / 10, marginTop: 10
                                }}
                            >
                                <ScrollView>
                                    <Text
                                        style={{ width: width * 5 / 9 - 30 }}
                                    >{details.overview}</Text>
                                </ScrollView>

                            </View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                        Cast & Crew
                </Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.actors}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item }) => (
                            <View
                                style={{ width: width / 4, margin: 2 }}
                            >
                                <Image
                                    source={{ uri: 'https://image.tmdb.org/t/p/w185/' + item.profile_path }}
                                    style={{ width: width / 4, height: width * 1.2 / 4 }}
                                ></Image>
                                <Text numberOfLines={1}>{item.name}</Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
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
        height: width * 4 / 9, width: width * 4 / 9
    },
    item: {
        marginLeft: 10, marginTop: 10, marginRight: 10, paddingBottom: 5,
    },
    importantText: {
        color: 'red'
    },
    normalText: {
        color: 'black'
    }
});