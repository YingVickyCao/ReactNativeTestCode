
import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class ImageCompoent extends Component {
    render() {
        return (
            <View style={{
                width: 107,
                height: 107,
            }}>
                {/*  Local icon */}
                <Image style={{
                    width: 107,
                    height: 107,
                }} source={require('../img/vs.png')} />

                <Image style={{
                    width: 107,
                    height: 107,
                }} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} />

                {/*  Network img */}
                <Image style={{
                    width: 107,
                    height: 107,
                }} source={{ uri: 'https://www.baidu.com/img/bd_logo1.png' }} />


            </View>
        );
    }
}