

const elementsRouting = [];

export function loadElementsRouting(props){
    const routingComponentElement = {};
    props.children.props.children.forEach(element => {
        routingComponentElement[element.props.path] = element;
    });
    elementsRouting.push([{ type: props.children.type.name, routingElement: routingComponentElement }]) 
    console.log(elementsRouting)
}

export function getElementByPath(path){
    return elementsRouting[path];
}