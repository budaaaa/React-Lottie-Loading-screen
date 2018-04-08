import React from 'react'
import PropTypes from 'prop-types'
import AppLoaderHOC from './AppLoaderHOC';
import { StyleSheet, Animated, ScrollView, View } from 'react-native';
import {Header, SearchBar} from 'react-native-elements';

import {mainColor, lightestColor, shadowColor} from '../assets/colors';
import HorizontalScroll from '../elements/HorizontalScroll';
import Title from '../elements/Title';

class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      translateX: new Animated.Value(10),
      opacity: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.translateX,
      {
        toValue: 0,
        duration: 500,
      }
    ).start();
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 500,
      }
    ).start();
  }

  render () {
    return (
      <Animated.View
        style={{
          height: "100%",
          width: "100%",
          transform: ([{translateY: this.state.translateX}]),
          opacity: this.state.opacity
        }}
        >

          <Header
            placement="top"
            backgroundColor="#fff"
            outerContainerStyles={styles.navbar}
            leftComponent={{ icon: 'menu', color: '#3e3b46' }}
            centerComponent={navbarTitle}
            />


            <ScrollView>
              <SearchBar
                inputStyle={styles.searchBarInputStyle}
                containerStyle={styles.searchBarContainer}
                placeholder='Search for a restaurant or cousine'
                />
              <Title title="Your Go-Tos" />
              <HorizontalScroll data={this.props.meals}/>
              <View style={styles.separator} />
              <Title title="Open Restaurants" />
              <HorizontalScroll data={this.props.categories}/>
              <View style={styles.separator} />
            </ScrollView>

      </Animated.View>
    )
  }
}

MainView.propTypes = {
  meals: PropTypes.array,
  categories: PropTypes.array,
}

export default AppLoaderHOC(MainView);

const styles = StyleSheet.create({
  navbar: {
    shadowColor: shadowColor,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  separator: {
    margin:10
  },
  searchBarContainer: {
    backgroundColor: lightestColor,
    borderBottomWidth: 0,
    borderBottomColor: shadowColor,
    borderTopWidth: 0,
    zIndex: -1
  },
  searchBarInputStyle: {
    backgroundColor: "#fff",
  }
});

const navbarTitle = {
  text: "Some City",

  style: {
    color: mainColor,
    fontSize: 18,
    fontWeight: 'bold'
  }
}
