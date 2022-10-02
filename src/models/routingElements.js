const elementsRouting = [];
let elementCurrentIndex = 0;

export function loadElementsRouting(props){
    getElementRouting(props.children);
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
            const childrenProps = getPropsElement(routesChildren);
            routingElement[childrenProps.path] = childrenProps.Element;
        })
    }else{
        const childrenProps = getPropsElement(propsChildren);
        routingElement[childrenProps.path] = childrenProps.Element;
    }
    return routingElement;
}

function getTypeNameRouting(propsChildren){
    return propsChildren.type.name
}

function getPropsElement(propsChildren){
    return propsChildren.props
}

export function getIndexByPath(path){
    elementsRouting.some((element, index) => {
        if(element.routingElement[path] !== undefined){
            elementCurrentIndex = index;
            return true;
        }
        return false
    })
    return elementCurrentIndex;
}


export function getElementByPath(path){
    return elementsRouting[elementCurrentIndex].routingElement[path];
}