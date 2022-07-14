import React from 'react'

export default function Newsitem(props) {
    return (
        <div className="card" >
            <img src={props.img} />
            <h3>{props.tittle}</h3>
            <p>{props.des}</p>
            <p>{props.pub}</p>

        </div>
    )
}
