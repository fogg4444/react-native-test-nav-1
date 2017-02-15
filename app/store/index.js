
import reducers from '../reducers/index'
import {
  createStore,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'

let configureStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloadign to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }
  return store
}

let store = configureStore()

export default store
