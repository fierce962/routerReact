import { useDispatch } from "react-redux";
import { changePath } from "../features/currentRoutingSlice/currentRoutes";

export default function Link({ path }){
    const dispatch = useDispatch();
    return (
        <div onClick={() => {
            window.history.pushState(null, "", path);
            dispatch(changePath(path));
        }}>
            dasdasdas
        </div>
    )
}