import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => {
  const { containerStyle, spinnerStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={spinnerStyle}>
        <ActivityIndicator size={size || 'large'}  />
      </View>
    </View>
  )
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff'
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
