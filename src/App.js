import './App.css';
import { Route } from './components/route';
import { Routes } from './components/routes';
import { GroupRoutes } from './components/groupRoutes';
import Link from './components/Link';

function CreateTest(){
  return(
    <div>1
      <Link path={ '/route2' }/>
    </div>
  )
}

function CreateTest2(){
  return(
    <div>2
      <Link path={ '/route3' }/>
    </div>
  )
}

function CreateTest3({ element }){
  return(
    <div>{ element }</div>
  )
}

function CreateNav(){
  return(
    <div>navigation</div>
  )
}

function CreateFooter(){
  return (
    <div>footer</div>
  )
}

function App() {
  return (
    <div>
      <Route>
        <GroupRoutes NavMenu={ <CreateNav /> } Footer={ <CreateFooter /> }>
          <Routes path={ '/' } Element={ <CreateTest /> }/>
          <Routes path={ '/route2' } Element={ <CreateTest2 /> }/>
        </GroupRoutes>
        <Routes path={ '/route3' } Element={ <CreateTest3 element={ '3' } /> }/>
      </Route>
    </div>
  );
}

export default App;
