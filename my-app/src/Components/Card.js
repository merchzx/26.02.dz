import React, { useEffect } from "react";
import { useState } from "react";
import '../Components/card.css'

export function Card(props) {
    const [info, setInfo] = useState({ name: "", price: 0.0 })

    useEffect(() => { setInfo({ name: props.name, price: props.price }) }, [1])
    return (
        <div className="global">
            <div className={'card' +props.id} style={{ height: props.hei, marginTop: props.marginTop }}>
                <p className="card-header" style={{ backgroundColor: props.color }}>
                    {info.name}
                </p>
                <p className="card-price">{info.price}</p>
                <div className="card-content">
                    <p>{props.Line1IsTrue ? '✔' : '❌'} list</p>
                    <p>{props.Line2IsTrue ? '✔' : '❌'} list</p>
                    <p>{props.Line3IsTrue ? '✔' : '❌'} list</p>
                    <p>{props.Line4IsTrue ? '✔' : '❌'} list</p>
                </div>
                <p className="card-footer" style={{ backgroundColor: props.color }}>
                    Select Package
                </p>
            </div>
        </div>
    )
}