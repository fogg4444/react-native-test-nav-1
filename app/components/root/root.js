
import {
  React,
  connect,
  Provider,
  bindActionCreators,
  navActions,
  store,
  View,
  Text,
  Button,
  StyleSheet,
  BackAndroid,
  NavigationExperimental,
} from '../../config/globalImports'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

import FirstView from '../firstView/firstView'

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
class NavWrapper extends React.Component {
  constructor(props) {
    super(props)
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
      navigationState={this.props.navState}
      onNavigate={this.handleNavigate.bind(this)}
      renderScene={this.renderScene.bind(this)} />
  }
}
let mapStateToProps = (state) => ({
  navState: state.navState
})

let mapDispatchToProps = (dispatch) => ({
  // navActions: bindActionCreators( navActions, dispatch ),
})
let NavWrapperConnected = connect(mapStateToProps, mapDispatchToProps)(NavWrapper)

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
////////////////////////////////////////////////////

class Root extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <Provider store={store}>
      <NavWrapperConnected />
    </Provider>
  }
}

export default Root
