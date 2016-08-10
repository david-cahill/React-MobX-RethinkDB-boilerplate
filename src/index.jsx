import React from 'react'
import { render } from 'react-dom'
import App from './components/App/App.jsx'
import Horizon from '@horizon/client'
const horizon = Horizon({ secure: false })
import AppState from './observables/AppObservable.js'
const appState =  new AppState(horizon)

horizon.onReady(() => {
  render(
    <App appState={appState} />,
    document.getElementById('root')
  )
})

horizon.connect()
