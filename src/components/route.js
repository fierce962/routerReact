import { useSelector, useDispatch } from "react-redux";
import { loadElementsRouting } from "../models/routingElements"; 
import { changePath } from "../features/currentRoutingSlice/currentRoutes";

export function Route(props){
    const indexProps = useSelector(state => state.currentRouting.indexProps);
    const dispatch = useDispatch();
    loadElementsRouting(props);
    console.log('route', window.location.pathname)
    dispatch(changePath('/route2'))
    return (
        <div>
            { props.children[indexProps] }
        </div>
    )
}