import React, { useState, useContext } from 'react'
import { 
    CREATE_EVENT, 
    DELETE_ALL_EVENTS,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
} from '../actions/index'

import { timeCurrentIso8601 } from '../utils'
import AppContext from '../contexts/AppContext'


const EventForm = () => {
    const {state, dispatch} = useContext(AppContext) 
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    //作成ボタン押下
    const addEvent = e => {
        //rerenderの防止
        e.preventDefault()
        //イベントの作成
        dispatch({
            type: CREATE_EVENT,
            title,
            body
        })
        //操作ログの作成
        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'イベントを作成しました',
            operatedAd: timeCurrentIso8601()
        })
        //formの初期化
        setTitle('')
        setBody('')
    }

    //全削除ボタン押下
    const deleteALlEvents = e => {
        //rerenderの防止
        e.preventDefault()
        const result = window.confirm("全てのイベントを削除します。よろしいですか？")
        //dispatch
        if (result) {
            //イベントの全削除
            dispatch({
                type: DELETE_ALL_EVENTS
            })
            //ログの生成
            dispatch({
                type: ADD_OPERATION_LOG,
                description: '全てのイベントを削除しました。',
                operatedAd: timeCurrentIso8601()
            })
        }
    }

    const deleteALlLogs = e => {
        e.preventDefault()

        const result = window.confirm("全ての操作ログを削除します。よろしいですか？")
        //dispatch
        if (result) {
            //イベントの全削除
            dispatch({
                type: DELETE_ALL_OPERATION_LOGS
            })
        }
    }

    const unClickCreate =  title === '' || body === ''

    return (
        <>
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

                <button className="btn btn-primary" onClick={addEvent} disabled={unClickCreate} >作成</button>
                <button className="btn btn-danger" onClick={deleteALlEvents} disabled={state.events.length === 0} >全てのイベントを削除</button>
                <button className="btn btn-danger" onClick={deleteALlLogs} >全てのログを削除</button>
            </form>
        </>
    )
} 

export default EventForm