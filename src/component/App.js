import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers/index'

import AppContext from '../contexts/AppContext'
import Events from './Events'
import EventForm from './EventForm'

const App = () =>  {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={ {state, dispatch} }>
      <div className="container">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
