import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children, customStyle }) => {
  return (
    <View style={[styles.containerStyle, customStyle]}>
      {children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd'
  }
}

export { CardSection };
