import React, { useState } from 'react'

const EventForm = ({state, dispatch}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addEvent = e => {
        //rerenderの防止
        e.preventDefault()
        //dispatch
        dispatch({
        type: 'CREATE_EVENT',
        title,
        body
        })

        //formの初期化
        setTitle('')
        setBody('')
    }

    const deleteALlEvents = e => {
        //rerenderの防止
        e.preventDefault()
        const result = window.confirm("全てのイベントを削除します。よろしいですか？")
        //dispatch
        if (result) {
        dispatch({
            type: 'DELETE_ALL_EVENTS',
            title,
            body
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
                <button className="btn btn-danger" onClick={deleteALlEvents} disabled={state.length === 0} >全てを削除</button>
            </form>
        </>
    )
} 

export default EventForm