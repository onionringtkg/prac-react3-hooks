import React from 'react'

const Event = ({ dispatch, event }) => {
    const handleDeleteEvent = () => {
    const result = window.confirm(`${event.title}を削除します。よろしいですか？`)
        if (result) {
            dispatch({
            type: 'DELETE_EVENT',
            id: event.id
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