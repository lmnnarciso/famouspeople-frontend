import React from "react";

export default function Button({ color, children }) {
    return <button className={`${color}`}>{children}</button>
}