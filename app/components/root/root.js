
import React from 'react'

import { connect } from 'react-redux'

import {
  View,
  Text,
  Button,
  StyleSheet,
  BackAndroid,
  NavigationExperimental
} from 'react-native'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental


class FirstView extends React.Component {
  render() {
    return <View style={styles.container}>
      <Text style={styles.welcome}>
        First View
      </Text>
      <Button title="Go" onPress={this.props.navTo.bind(this, 'secondView')}/>
    </View>
  }
}

class SecondView extends React.Component {
  render() {
    return <View style={styles.container}>
      <Text style={styles.welcome}>
        Second View
      </Text>
      <Button title='Go' onPress={this.props.navTo.bind(this, 'firstView')}/>
    </View>
  }
}

//////////////////////////////////////////////////////////



class Root extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navigation: {

        index: 0,
        routes: [
          {key: 'first', title: 'First Page'},
          {key: 'second', title: 'Second Page'}
        ]

      }
    }
  }

  handleNavigate() {
    console.log('----- handle navigate')
  }

  navTo(route) {
    console.log('nav to route', route)
  }

  renderScene() {
    console.log('renderScene', this)

    return <FirstView navTo={this.navTo.bind(this)}/>

  }



  render() {
    return <NavigationCardStack
      direction='vertical'
      navigationState={this.state.navigation}
      onNavigate={this.handleNavigate.bind(this)}
      renderScene={this.renderScene.bind(this)} />
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default Root
