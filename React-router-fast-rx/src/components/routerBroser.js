import React from "react";
import { Provider } from 'react-redux';
import routerStore from '../routerStore/routerStore';


export default function RouterBroser({ AppComponent }){
    return (
        <Provider store={ routerStore }>
            <AppComponent />
        </Provider>
    )
}