import React from "react";
import Routes from "./routes";

export default function GroupRoutes({ NavMenu, Footer }){
    return (
        <div>
            { NavMenu }
                <Routes />
            { Footer }
        </div>
    )
}