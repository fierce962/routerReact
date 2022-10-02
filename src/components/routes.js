import { useSelector } from "react-redux";
import { getElementByPath } from '../models/routingElements';

export function Routes({ path, Element }){
    const currentPath = useSelector(state => state.currentRouting.path);
    const RenderElement = getElementByPath(currentPath);
    return (
        <div>
            <RenderElement />
        </div>
    )
}