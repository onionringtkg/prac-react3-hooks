import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers/index'

import Events from './Events'
import EventForm from './EventForm'

const App = () =>  {
  const [state, dispatch] = useReducer(reducer, [])

  return (
      <div className="container">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
  );
}

export default App;
