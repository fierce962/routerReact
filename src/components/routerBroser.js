import { Provider } from 'react-redux';
import routerStore from '../routerStore/routerStore';


export function RouterBroser({ AppComponent }){
    return (
        <Provider store={ routerStore }>
            <AppComponent />
        </Provider>
    )
}