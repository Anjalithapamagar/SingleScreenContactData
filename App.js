import React from 'react';
import { StyleSheet, View } from 'react-native';

import Regform from './app/components/Regform'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Include the Regform component */}
        <Regform />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
