import { getElementByPath } from "../models/routingElements"
import { Routes } from "./routes"

export function GroupRoutes({ NavMenu, Footer }){
    const test = getElementByPath('/')
    return (
        <div>
            <NavMenu /> 
                <Routes Element={ test }/>
            <Footer />
        </div>
    )
}