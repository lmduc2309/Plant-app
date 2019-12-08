/**
* This is the Login Page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, View, Left, Right, Button, Icon, Item, Input } from 'native-base';
import {Alert, Platform} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { firebaseApp } from '../FirebaseConfig';
// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';

export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        hasError: false,
        errorText: ''
      };
  }


  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => Actions.pop()} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search-outline' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return(
      <Container style={{backgroundColor: '#fdfdfd', paddingTop: Platform.OS === 'ios' ? 34 : 0 }}>
        <Navbar left={left} right={right} title="LOGIN" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 50, paddingRight: 50}}>
          <View style={{marginBottom: 35, width: '100%'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'left', width: '100%', color: Colors.navbarBackgroundColor}}>Welcome back, </Text>
            <Text style={{fontSize: 18, textAlign: 'left', width: '100%', color: '#687373'}}>Login to continue </Text>
          </View>
          <Item>
              <Icon active name='ios-person' style={{color: "#687373"}}  />
              <Input placeholder='email' onChangeText={(text) => this.setState({email: text})} placeholderTextColor="#687373" />
          </Item>
          <Item>
              <Icon active name='ios-lock' style={{color: "#687373"}} />
              <Input placeholder='Password' onChangeText={(text) => this.setState({password: text})} secureTextEntry={true} placeholderTextColor="#687373" />
          </Item>
          {this.state.hasError?<Text style={{color: "#c0392b", textAlign: 'center', marginTop: 10}}>{this.state.errorText}</Text>:null}
          <View style={{alignItems: 'center'}}>
            <Button onPress={() => this.DangNhap()} style={{backgroundColor: Colors.navbarBackgroundColor, marginTop: 20}}>
              <Text style={{color: '#fdfdfd'}}>Login</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }

  
  DangNhap() {
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
        Alert.alert(
            'Alert Title',
            'Login successfully ' + this.state.email,
            [
              
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => Actions.home()},
            ],
            {cancelable: false},
          );
          this.setState({
              email: '',
              password: '',
          })
    })
    .catch(function(error) {
        Alert.alert(
            'Alert Title',
            'Login failed',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => Actions.login()},
            ],
            {cancelable: false},
          );
      });
}

}
