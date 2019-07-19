import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default class Tab1Screen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
        <Text> Tab1Screen </Text>
        <Button
          mode='contained'
          onPress={() => {
            this.props.navigation.openDrawer();
          }}>
          Open Drawer
        </Button>
      </View>
    );
  }
}
