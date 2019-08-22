import React, { Component } from 'react'
import { Text, View, Button, ProgressBarAndroid } from 'react-native'
// let title = null;
export default class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            // isShowResult: false,
            // moviesData: '',
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
                    this.setState({
                        isLoading: false,
                        // moviesData: responseJson.movies,
                        // moviesData: responseJson.title,
                    }, function () {
    
                    });
                }, 2000)
                
            })
            .catch((error) => {
                console.log(error);
            });
        })

        console.log("-----isLoading=" +this.state.isLoading);
        // this.setState({ isLoading: true })
        // fetch('https://facebook.github.io/react-native/movies.json')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         // console.log('responseJson = ' + JSON.stringify(responseJson));
        //         // title = responseJson.title;
        //         this.setState({
        //             isLoading: false,
        //             // moviesData: responseJson.movies,
        //             // moviesData: responseJson.title,
        //         }, function () {

        //         });
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }

    _renderButton() {
        return (<Button onPress={this._requestContent} title="Request movies data" color="#841584"></Button>)
    }

    _renderLoading() {
        return <ProgressBarAndroid />
    }

    _renderContent() {
        return <Text style={{ color: 'black' }}>Test</Text>
    }

    render() {
        return (<View style={{ flex: 1, padding: 20 }} >
            {this._renderButton()}
            {this.state.isLoading ? this._renderLoading() : this._renderContent()}
        </View>)
    }
}

