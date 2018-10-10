import React from 'react';
import { Image, Text, View } from 'react-native';

import globalStyles from '../../global/styles'

const Speaker = (props) => {
  const speaker = props.speaker.item;
  return (
    <View style={[globalStyles.card]}>
      <View>
        <Image
          source={{ uri: speaker.image}}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[globalStyles.h1, globalStyles.primary]}>{speaker.firstName} {speaker.lastName}</Text>
        <Text style={styles.tagline}>{speaker.tagline}</Text>
      </View>
    </View>
  );
}

const styles = {
  name: {
    color: 'tomato',
    fontSize: 18,
    fontWeight: '700'
  },
  tagline: {
    color: '#000'
  },
  image: {
    width: '100%',
    height: 200
  },
  textContainer: {
    padding: 10
  },
}

export { Speaker };
