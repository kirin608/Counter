import React, { useEffect, useState } from "react";
import "./App.css";

export default function Time() {
    const [cTime, setTime] =
        useState(new Date().toLocaleString());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
    })

    return (
        <div className="time">
            <h1>{cTime}</h1>

        </div>
    );
}

