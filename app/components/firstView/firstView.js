import {
  React,
  View,
  Text,
  Button,
  StyleSheet,
  connect,
  bindActionCreators,
  navActions
} from '../../config/globalImports'


class FirstView extends React.Component {
  render() {
    console.log('this', this)
    return <View style={styles.container}>
      <Text style={styles.welcome}>
        First View
      </Text>
      <Button title="Go" onPress={this.props.navTo.bind(this, 'secondView')}/>
    </View>
  }
}

let mapStateToProps = (state) => ({
  navState: state.navState
})

let mapDispatchToProps = (dispatch) => ({
  navActions: bindActionCreators( navActions, dispatch ),
})

// export default FirstView
export default connect(mapStateToProps, mapDispatchToProps)(FirstView)



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
  }
})
