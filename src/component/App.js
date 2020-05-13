import React, { useEffect, useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'

import AppContext from '../contexts/AppContext'
import Events from './Events'
import EventForm from './EventForm'
import OperationLogs from './OperationLogs'

const App = () =>  {
  //オブジェクトの永続化
  const appState = localStorage.getItem('appWithRedux') 
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  //オブジェクトの永続化
  useEffect(() => {
    const string = JSON.stringify(state)
    localStorage.setItem('appWithRedux', string)
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App;
