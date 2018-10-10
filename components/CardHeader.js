import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import globalStyles from '../../global/styles'

const CardHeader = ({ title }) => {
  return (
    <View style={[globalStyles.background, styles.container]}>
      <Text style={[globalStyles.primary, styles.text]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    borderColor: '#ddd'
  },
  text: {
    fontSize: 18,
    fontWeight: '600'
  }
})

export { CardHeader }
