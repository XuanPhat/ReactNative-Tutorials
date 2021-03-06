import React from 'react';
import { View, SafeAreaView } from 'react-native';

import AddDataScreen from './src/CloudFilestore/AddDataScreen';
import ReadDataScreen from './src/CloudFilestore/ReadDataScreen';
// REALTIME
import ChatScreen from './src/Realtime/ChatScreen';
// NOtification
import Notification from './src/Notification';
// Authentication
import LoginScreen from './src/Authentication/LoginScreen';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());
    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <AddDataScreen /> */}
        {/* <ReadDataScreen /> */}
        {/* <ChatScreen /> */}
        {/* <Notification /> */}
        <LoginScreen />
      </SafeAreaView>
    );
  }
}
