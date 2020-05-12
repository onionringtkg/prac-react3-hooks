import React, { useState, useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers/index'

const App = () =>  {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    //rerenderの防止
    e.preventDefault()
    //dispatch
    dispatch({
      type: 'CREATE_EVENTS',
      title,
      body
    })

    //formの初期化
    setTitle('')
    setBody('')
  }

  return (
    <div className="container">
      <h4>イベント入力フォーム</h4>
      <form className="form-group">
        <div className="from-group">
          <label htmlFor="formEventTitle">イベント名</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={ e => setTitle(e.target.value) }/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">詳細</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={ e => setBody(e.target.value) }/>
        </div>

        <button className="btn btn-primary" onClick={addEvent}>作成</button>
        <button className="btn btn-danger">削除</button>
        <button className="btn btn-danger">全てを削除</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>詳細</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}

export default App;
