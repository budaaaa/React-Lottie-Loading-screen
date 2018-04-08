import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image, Text } from 'react-native';
import { Card } from 'react-native-elements';
import {mainColor} from '../assets/colors';
import { responsiveWidth} from 'react-native-responsive-dimensions';

class Panel extends React.Component {
  render () {

    const {data} = this.props;

    return (
      <Card containerStyle={styles.card}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: data.image }}
        />
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.mealName}>{data.name.substring(0,20)}</Text>
            <Text style={styles.mealTime}>10 - 20 MIN</Text>
          </View>
          <Text style={styles.origin}>{data.area}</Text>
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  name: {
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  image: {
    width: "100%",
    height: "70%"
  },

  card: {
    width: responsiveWidth(90),
    height: 250,
    padding: 0,
    marginLeft: 10,
    marginRight: 0,
    marginTop: 0,
  },

  content: {
    height: "30%",
    justifyContent: 'center',
    padding: 15,
  },

  title: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  mealName: {
    color: mainColor,
    fontSize: 16,
    fontWeight: 'bold'
  },

  mealTime: {
    color: mainColor
  },

  origin: {
    color: '#9D9DA2'
  }

});

export default Panel;

Panel.propTypes = {
  data: PropTypes.object.isRequired,
}
