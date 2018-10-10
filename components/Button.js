import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import globalStyles from '../../global/styles'
import constants from '../../global/constants'

const Button = ({ onPress, title, customStyle }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      style={[buttonStyle, customStyle]}
      onPress={onPress}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: constants.secondaryColor,
    marginTop: 10,
    marginBottom: 10,
    maxHeight: 50
  },
  textStyle: {
    alignSelf: 'center',
    color: constants.secondaryColor,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Button }
