import { useSelector } from "react-redux";
import { loadElementsRouting } from "../models/routingElements"; 

export function Route(props){
    const indexProps = useSelector(state => state.currentRouting.indexProps);
    loadElementsRouting(props);
    console.log(props)
    return (
        <div>
            { props.children.length !== undefined ? props.children[indexProps] : props.children }
        </div>
    )
}