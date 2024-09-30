import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import counterSlice from './counterSlice.ts'
import thumbnailsSlice from './thumbnailsSlice.ts'
import myRootSaga from './sagas'
import App from './App.tsx'
import './index.css'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    thumbnails: thumbnailsSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(myRootSaga)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)