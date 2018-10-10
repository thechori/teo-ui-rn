import { StyleSheet } from 'react-native'
import constants from './constants'

export default StyleSheet.create({
  button: {
    backgroundColor: constants.primaryColor,
    padding: 10,
    borderRadius: 5
  },
  card: {
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
  },

  // Position
  flex: {
    flex: 1
  },

  // Fonts
  h1: {
    fontSize: 20,
    paddingBottom: 5
  },
  h2: {
    fontSize: 18
  },
  h3: {
    fontSize: 16
  },
  strong: {
    fontWeight: '600'
  },

  // Colors
  background: {
    backgroundColor: constants.backgroundColor
  },
  primary: {
    color: constants.primaryColor
  },
  secondary: {
    color: constants.secondaryColor
  },
  primaryBg: {
    backgroundColor: constants.primaryColor
  },
  secondaryBg: {
    backgroundColor: constants.primaryColor
  },

  // Spacing
  paddingSmall: {
    padding: 5
  },
  paddingMedium: {
    padding: 10
  },
  paddingLarge: {
    padding: 15
  },
  paddingExtraLarge: {
    padding: 20
  }
})
