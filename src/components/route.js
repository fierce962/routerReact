import { useDispatch } from "react-redux";
import { loadElementsRouting } from "../models/routingElements";
import { Routes } from "./routes"; 

export function Route(props){
    console.log(props)
    loadElementsRouting(props);
    return (
        <div>
            { props.children }
        </div>
    )
}