import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () =>  {
  return (
    <div className="container">
      <h4>イベント入力フォーム</h4>
      <form className="form-group">
        <div className="from-group">
          <label htmlFor="formEventTitle">イベント名</label>
          <input className="form-control" id="formEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">詳細</label>
          <textarea className="form-control" id="formEventBody" />
        </div>

        <button className="btn btn-primary">作成</button>
        <button className="btn btn-danger">削除</button>
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
