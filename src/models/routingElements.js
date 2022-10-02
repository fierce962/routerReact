

const elementsRouting = [];

export function loadElementsRouting(props){
    getElementRouting(props.children);
    console.log('elementsrouting', elementsRouting)
}

function getElementRouting(propsChildren){
    if(propsChildren.length !== undefined){
        propsChildren.forEach(routes => {
            const routesName = getTypeNameRouting(routes);
            const elements = getRoutesPropsElements(routes)
            elementsRouting.push({ type: routesName, routingElement: elements })
        });
    }else{

    }
}

function getRoutesPropsElements(propsChildren){
    const routingElement = {};
    if(propsChildren.props.children !== undefined && propsChildren.props.children.length !== undefined){
        propsChildren.props.children.forEach(routesChildren => {
            const propsChildren = getPropsElement(routesChildren);
            routingElement[propsChildren.path] = propsChildren.Element;
        })
    }else{

    }
    return routingElement;
}

function getTypeNameRouting(propsChildren){
    return propsChildren.type.name
}

function getPropsElement(propsChildren){
    return propsChildren.props
}




export function getElementByPath(path){
    // let renderElement;
    // elementsRouting.some(element => {
    //     if(element.type === "GroupRoutes" && element.routingElement[path] !== undefined){
    //         renderElement = element.routingElement[path].props.Element;
    //         return true;
    //     }
    //     return false
    // })
    // return renderElement;
}