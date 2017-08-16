/**
 * Albums app for Android
 */

// 1. import a library to help create a component
// Npm modules can just be imported, our own modules have to have a path to them.

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// 2. create component

const App = () => (
  // We must return one top level JSX
  <Header headerText={'Terogram'} />

); 


// 3. render it to the device
// only the root component uses AppRegistry, for every other
// component we export it.. to make it available
AppRegistry.registerComponent('albums', () => App);
