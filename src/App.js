import './App.css';
import { Route } from 'react-router-fast-rx';
import { Routes } from 'react-router-fast-rx';
import { GroupRoutes } from 'react-router-fast-rx';
import { Link } from 'react-router-fast-rx';


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
