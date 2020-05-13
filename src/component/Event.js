import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

import {
    ADD_OPERATION_LOG,
    DELETE_EVENT
} from '../actions'
import { timeCurrentIso8601 } from '../utils'

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)

    const handleDeleteEvent = () => {
        const result = window.confirm(`${event.title}を削除します。よろしいですか？`)
        if (result) {
            dispatch({
                type: DELETE_EVENT,
                id: event.id
            })
            dispatch({
                type: ADD_OPERATION_LOG,
                description: `イベント（id = ${event.id}）は削除されました。`,
                operatedAt: timeCurrentIso8601()
            }) 
        }
    }

    return (
    <tr>
    <td>{event.id}</td>
    <td>{event.title}</td>
    <td>{event.body}</td>
    <td><button className="btn btn-danger" onClick={handleDeleteEvent}>削除</button></td>
    </tr>
    )
}

export default Event