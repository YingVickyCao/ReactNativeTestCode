import React, { Component } from 'react'
import { Text, View, Button, ProgressBarAndroid } from 'react-native'
let title = null;
export default class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            isShowResult : false,
            moviesData: 'test',
        }
        this.getMoviesByAsync = this.getMoviesByAsync.bind(this)
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
    _getTitle(val) {
        return val
    }

    getMoviesByAsync() {
        this.setState({
            isLoading: true,
        })
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('responseJson = ' + JSON.stringify(responseJson));
                title = responseJson.title;
                this.setState({
                    isLoading: false,
                    // moviesData: responseJson.movies,
                    moviesData: responseJson.description,
                }, () => {
                    return this._getTitle(this.state.moviesData)
                });
                // alert(responseJson.movies)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        // if (this.state.isLoading) {
        //     return (<View style={{ flex: 1, padding: 20 }}>
        //         <ProgressBarAndroid />
        //     </View>)
        // }

        return (<View style={{ flex: 1, padding: 20 }} >
            <Button onPress={this.getMoviesByAsync} title="Request movies data" color="#841584">
            </Button>

            {this.state.isLoading ? (<View style={{ flex: 1, padding: 20 }}>
                <ProgressBarAndroid />
            </View>) : 
            <Text style={{ color: 'black', backgroundColor: '#ff0000' }}>
            {title}
            </Text>}

            
        </View>);
    }
}

