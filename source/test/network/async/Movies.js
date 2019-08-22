import React, { Component } from 'react'
import { FlatList, Text, View, Button, ProgressBarAndroid, StyleSheet } from 'react-native'
// let title = null;
export default class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            // isShowResult: false,
            moviesData: '',
            movies: null,
        }
    }
    /*
    function getMoviesByAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                return responseJson.movies;
            })
            .catch((error) => {
                console.log(error);
            });
    }*/
    // _getTitle(val) {
    //     return val
    // }

    _requestContent = () => {
    
        /*
        console.log("-----isLoading1=" +this.state.isLoading);
        this.setState({
            isLoading: true
        }, () => {
            console.log("-----isLoading2=" +this.state.isLoading);
            fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log('responseJson = ' + JSON.stringify(responseJson));
                // title = responseJson.title;
                setTimeout(() => {
                    console.log("-----isLoading3=" +this.state.isLoading);
                    this.setState({
                        isLoading: false,
                        movies: responseJson.movies,
                        moviesData: responseJson.title,
                    }, function () {

                    });
                }, 2000) 
            })
            .catch((error) => {
                console.log(error);
            });
        })
        console.log("-----isLoading4=" +this.state.isLoading);
        */

        console.log("-----isLoading1=" + this.state.isLoading);
        this.setState({ isLoading: true })
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log('responseJson = ' + JSON.stringify(responseJson));
                // title = responseJson.title;
                console.log("-----isLoading2=" + this.state.isLoading);
                setTimeout(() => {
                    console.log("-----isLoading3=" + this.state.isLoading);
                    this.setState({
                        isLoading: false,
                        movies: responseJson.movies,
                        moviesData: responseJson.title,
                    }, function () {

                    });
                }, 2000)
            })
            .catch((error) => {
                console.log(error);
            });
        console.log("-----isLoading4=" + this.state.isLoading);
    }

    _renderButton() {
        return (<Button onPress={this._requestContent} title="Request movies data" color="#841584"></Button>)
    }

    _renderLoading() {
        return <ProgressBarAndroid />
    }

    _renderContent() {
        return <Text style={{ color: 'black' }}>{this.state.moviesData}</Text>
    }

    /**
     {
    "title": "The Basics - Networking",
    "description": "Your app fetched this from a remote endpoint!",
    "movies": [
            { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
            { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
            { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
            { "id": "4", "title": "Inception", "releaseYear": "2010" },
            { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
        ]
    } 
     */
    _renderContent4List() {
        //      { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
        return <FlatList
            data={this.state.movies}
            renderItem={({ item }) => <Text style={styles.item}>{item.id} , {item.title}, {item.releaseYear}</Text>}
            keyExtractor={(item, index) => item.id} />
    }

    render() {
        return (<View style={styles.container} >
            {this._renderButton()}
            {/* {this.state.isLoading ? this._renderLoading() : this._renderContent()} */}
            {this.state.isLoading ? this._renderLoading() : this._renderContent4List()}
        </View >)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#bbaacc'

    },
    item: {
        padding: 10,
        height: 45,
        backgroundColor: '#F0B27A',
        marginBottom: 1,
    },
})
