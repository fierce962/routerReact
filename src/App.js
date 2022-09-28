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
      </Route>
    </div>
  );
}

export default App;
