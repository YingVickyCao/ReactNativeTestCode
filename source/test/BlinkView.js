import React, { Compoent } from 'react'
import { Text, View } from 'react-native'

class BlinkView extends Compoent {
    state = { isRed: true };

    componentDidMount() {
        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { isRed: !previousState.isRed };
            });
        }, 1000);
    }

    render(){
        // 根据当前showText的值决定是否显示text内容
    if (!this.state.isRed) {
        return null;
      }
  
      return (
        <Text style={{color:'#f00'}}>{this.props.text}</Text>
      );
    }
}

export default class BlinkPage extends Component {
    render() {
        return (
            <View>
                <BlinkView text='A' />
                <BlinkView text='B' />
            </View>
        );
    }
}