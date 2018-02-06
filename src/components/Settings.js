
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Image, Dimensions, TouchableOpacity, Slider, ScrollView, Picker
} from 'react-native';
import Header from './Header';

import { setMovieType } from '../actions';
import { connect } from 'react-redux';

var { height, width } = Dimensions.get('window');

export class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 0.0
        }
    }

    static navigationOptions = ({ navigation }) => {

        let header = (<Header navigation={navigation} title={'Settings'} isShowListIcon={false} />)
        let headerBackTitle = 'Settings';

        return { header, headerBackTitle };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.item}>
                    <Text
                        style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>
                        Filter
                </Text>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.setMovieType('popular');
                            this.props.navigation.navigate('Home', { type: 'popular', title: 'Popular' });
                        }}
                    >
                        <Text style={{ fontSize: 20, padding: 10 }} >
                            Popular Movies
                 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.setMovieType('top_rated');
                            this.props.navigation.navigate('Home', { type: 'top_rated', title: 'Top Rated' });
                        }}
                        style={{
                            borderBottomWidth: 0.5, borderBottomColor: 'cyan',
                            marginLeft: 10, marginRight: 10, paddingTop: 10, paddingBottom: 10,
                        }}
                    >
                        <Text style={{ fontSize: 20 }} >
                            Top Rated Movies
                 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.setMovieType('upcoming');
                            this.props.navigation.navigate('Home', { type: 'upcoming', title: 'Up Coming' });
                        }}
                    >
                        <Text style={{ fontSize: 20, padding: 10 }} >
                            Upcoming Movies
                 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.setMovieType('now_playing');
                            this.props.navigation.navigate('Home', { type: 'now_playing', title: 'Now Playing' });
                        }}
                        style={{
                            borderBottomWidth: 0.5, borderBottomColor: 'cyan',
                            marginLeft: 10, marginRight: 10, paddingTop: 10, paddingBottom: 10,
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                        }}
                    >
                        <Text style={{ fontSize: 20 }} >
                            NowPlaying Movies
                      </Text>
                        <Image
                            source={require('../images/tick.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </TouchableOpacity>

                    <View style={{
                        marginLeft: 10, marginRight: 10, paddingTop: 10, paddingBottom: 10,
                        flexDirection: 'row', justifyContent: 'space-between',
                    }}>
                        <Text style={{ fontSize: 20 }} >Movies with rate from:</Text>
                        <Text style={{ fontSize: 20 }} >{this.state.rate.toFixed(1)}</Text>
                    </View>
                    <Slider
                        style={{ width: width - 20 }}
                        step={1}
                        minimumValue={0.0}
                        maximumValue={10.0}
                        step={0.1}
                        value={this.state.rate}
                        onValueChange={val => this.setState({ rate: val })}
                    />

                    <View style={{
                        marginLeft: 10, marginRight: 10, paddingTop: 10, paddingBottom: 10,
                        flexDirection: 'row', justifyContent: 'space-between',
                    }}>
                        <Text style={{ fontSize: 20 }} >From Release Year:</Text>
                    </View>
                    <Text
                        style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>
                        Sort By
                </Text>

                    <TouchableOpacity
                        style={{
                            borderBottomWidth: 0.5, borderBottomColor: 'cyan',
                            marginLeft: 10, marginRight: 10, paddingTop: 10, paddingBottom: 10,
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                        }}
                    >
                        <Text style={{ fontSize: 20 }} >
                            Release Date
                      </Text>
                        <Image
                            source={require('../images/tick.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, padding: 10 }} >
                            Rating
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMovieType: (moviesType) => {
            dispatch(setMovieType(moviesType))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
    item: {
        marginLeft: 10, marginTop: 10, marginRight: 10, paddingBottom: 5,
    }
});