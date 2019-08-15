import React, { Compoent } from 'react'
import { Image } from 'react-native'

export default class MyImage extends Compoent {
    render() {
        let pic = {
            uri: 'https://www.baidu.com/img/bd_logo1.png'
          };
        return <Image source={pic} style={{ width: 100, height: 100 }}/>
    }
}