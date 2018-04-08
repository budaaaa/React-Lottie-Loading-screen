import React from 'react';

import { View, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import loading from '../assets/animations/load.json'
import axios from 'axios';

const URL = 'https://www.themealdb.com/api/json/v1/1/latest.php';
const URL2 = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function AppLoaderHOC(WrappedComponent) {
  return class AppLoaderHOC extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          fadeAnim: new Animated.Value(0),
          secondFade: new Animated.Value(0),
          background: '#0b091b',
          data: [],
          categories: [],
        }
    }

    componentWillMount() {
      this.animateComponent(this.state.fadeAnim, 1);
      setTimeout(() => this.animateComponent(this.state.secondFade, 1), 700);

      axios.get(URL2).then(res => {
        this.setState({
          categories: res.data.categories.map(a => {
            return {
              id: a.idCategory,
              image: a.strCategoryThumb,
              name: a.strCategory,
              area: "England",
            }
          })
        })
      })
      axios.get(URL).then(
        (res) => {
          const newD = res.data.meals.map(a => (
              {
                id: a.idMeal,
                image: a.strMealThumb,
                name: a.strMeal,
                area: a.strArea
              }
          ));
          this.setState({
            data: newD,
          });

          setTimeout(async () => {
            this.animateComponent(this.state.secondFade, 0);
            setTimeout(() => this.animateComponent(this.state.fadeAnim, 0), 500);
            setTimeout(() => this.setState({ renderData: true }), 1700);
          }, 5000)
        }
      )
    }

    componentDidMount() {
      this.animation.play()
    }


    animateComponent (state, val) {
      Animated.timing(
        state,
        {
          toValue: val,
          duration: 1000,
        }
      ).start();
    }

    render () {
      const {
        data,
        renderData,
        fadeAnim,
        secondFade,
        background,
        categories,
      } = this.state;
      return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {renderData ? (
            <WrappedComponent {...this.props} meals={data} categories={categories}/>
          ) : (
            <Animated.View
              style={{
                height: "100%",
                width: "100%",
                opacity: fadeAnim,
                backgroundColor: background
              }}
              >
              <Animated.View
                style={{
                  height: "100%",
                  width: "100%",
                  opacity: secondFade,
                }}
                >
                <LottieView
                  ref={(anim) => {this.animation = anim}}
                  autoPlay
                  source={loading}
                  enableMergePathsAndroidForKitKatAndAbove
                  />
              </Animated.View>
            </Animated.View>
          )}
        </View>
      )
    }
  }
}

export default AppLoaderHOC;
