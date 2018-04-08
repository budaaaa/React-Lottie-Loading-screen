import React from 'react'
import PropTypes from 'prop-types'
import Panel from './Panel';
import {ScrollView, StyleSheet} from 'react-native';


const HorizontalScroll = ({data}) => {
  return (
    <ScrollView
      horizontal
      style={styles.scroll}
      >
      {data.map(a => <Panel key={a.id} data={a} />)}
    </ScrollView>
  )
}

HorizontalScroll.propTypes = {
  data: PropTypes.array.isRequired,
}


const styles = StyleSheet.create({
  scroll: {
    marginLeft: 10,
  },
})

export default HorizontalScroll;
