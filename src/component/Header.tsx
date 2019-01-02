import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component{
    render() {
      return(
        //   perhatikan cara pemanggilan style
        <View style={style.header}>
            <Text>Header</Text>
        </View>
      );
    }
  }

//   membuat 
const style = StyleSheet.create({
    header : {
        height : 50,
        backgroundColor: "blue",
    }
});