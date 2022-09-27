import './App.css';
import { Route } from './components/route';
import { Routes } from './components/routes';

function App() {
  return (
    <div>
      <Route>
        <Routes />
        <Routes />
        <Routes />
      </Route>
    </div>
  );
}

export default App;
