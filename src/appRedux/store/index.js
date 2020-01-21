import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import appReducer from 'src/appRedux/reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  balackList: []
}

const persistedReducer = persistReducer(persistConfig, appReducer)

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export const persistor = persistStore(store)
