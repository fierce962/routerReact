import { useSelector } from "react-redux";
import { loadElementsRouting } from "../models/routingElements"; 

export function Route(props){
    const indexProps = useSelector(state => state.currentRouting.indexProps);
    loadElementsRouting(props);
    return (
        <div>
            { props.children[indexProps] }
        </div>
    )
}