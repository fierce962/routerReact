import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadElementsRouting } from "../models/routingElements";
import { changePath } from "../features/currentRoutingSlice/currentRoutes";

export function Route(props){
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
            { props.children.length !== undefined ? props.children[indexProps] : props.children }
        </div>
    )
}