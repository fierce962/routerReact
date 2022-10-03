import React from "react";
import { useSelector } from "react-redux";
import { getElementByPath } from '../models/routingElements';

export default function Routes({ path, Element }){
    const currentPath = useSelector(state => state.currentRouting.path);
    const RenderElement = getElementByPath(currentPath);
    return (
        <div>
            { RenderElement }
        </div>
    )
}