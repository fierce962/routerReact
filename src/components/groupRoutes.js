import { Routes } from "./routes";

export function GroupRoutes({ NavMenu, Footer }){
    return (
        <div>
            <NavMenu /> 
                <Routes />
            <Footer />
        </div>
    )
}