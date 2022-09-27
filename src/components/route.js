import React, { useRef } from "react";

export function Route(props){
    const difRef = useRef(null)
    console.log(props)
    return (
        <div>
            { props.children } 
        </div>
    )
}