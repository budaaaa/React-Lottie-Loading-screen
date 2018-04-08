import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

class Title extends React.Component {
  render () {
    return (
      <View style={styles.parent}>
        <View style={styles.line}/>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.line}/>
      </View>
    )
  }
}

export default Title;

const styles = StyleSheet.create({
  parent: {
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title : {
    color: '#9D9DA2'
  },
  line: {
    backgroundColor: '#9D9DA2',
    height: 1,
    width: 10,
    margin: 5,
  }
});


Title.propTypes = {
  title: PropTypes.string.isRequired,
}
