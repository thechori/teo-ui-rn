import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = ({ children, customStyle }) => {
  return (
    <View style={[styles.containerStyle, customStyle]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    backgroundColor: '#fff'
  }
})

export { Card }
