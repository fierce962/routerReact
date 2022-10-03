import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadElementsRouting } from "../models/routingElements";
import { changePath } from "../features/currentRoutingSlice/currentRoutes";

export default function Route(props){
    const firstRender = useRef(true);
    const dispatch = useDispatch();
    const indexProps = useSelector(state => state.currentRouting.indexProps);
    loadElementsRouting(props);

    if(firstRender.current){
        dispatch(changePath(window.location.pathname));
        firstRender.current = false;
        window.addEventListener('popstate', () => { 
            dispatch(changePath(window.location.pathname));
        });
    }
    
    return (
        <div>
            <RenderRoute props={ props } index={ indexProps } />
        </div>
    )
}

function RenderRoute({ props, index }){
    if(props.children === undefined){
        return null
    }
    if(props.children.length !== undefined){
        return props.children[index]
    }else{
        return props.children
    }
}