import './App.css';
import { Route } from './components/route';
import { Routes } from './components/routes';
import { GroupRoutes } from './components/groupRoutes';

function CreateTest(){
  return(
    <div>1</div>

  )
}

function CreateTest2(){
  return(
    <div>2</div>

  )
}

function CreateTest3(){
  return(
    <div>3</div>

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
        <GroupRoutes NavMenu={ CreateNav } Footer={ CreateFooter }>
          <Routes path={ '/' } Element={ CreateTest }/>
          <Routes path={ '/route2' } Element={ CreateTest2 }/>
        </GroupRoutes>
        <Routes path={ '/route3' } Element={ CreateTest3 }/>
      </Route>
    </div>
  );
}

export default App;
