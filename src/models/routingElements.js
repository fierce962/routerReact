

const elementsRouting = [];

export function loadElementsRouting(props){
    const routingComponentElement = {};
    props.children.props.children.forEach(element => {
        routingComponentElement[element.props.path] = element;
    });
    elementsRouting.push({ type: props.children.type.name, routingElement: routingComponentElement });
}

export function getElementByPath(path){
    let renderElement;
    console.log('hola', elementsRouting[0].routingElement[path])
    elementsRouting.some(element => {
        if(element.type === "GroupRoutes" && element.routingElement[path] !== undefined){
            renderElement = element.routingElement[path].props.Element;
            console.log('desde get element', renderElement)
        }
    })
    return renderElement;
}