import { createWrapper } from 'next-redux-wrapper'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const reducers = combineReducers({})
const makeStore = () => {
  const middleware = [thunk]
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))
  return store
}
const wrapperStore = createWrapper(makeStore)
export default wrapperStore
