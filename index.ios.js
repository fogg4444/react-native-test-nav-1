/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native'
import Root from './app/components/root/root'

export default class healthGuruNative extends React.Component {
  render() {
    return <Root />
  }
}

AppRegistry.registerComponent('healthGuruNative', () => healthGuruNative);
