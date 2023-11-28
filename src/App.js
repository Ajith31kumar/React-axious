import './App.css';
import UserDetails from './pages/UserDetails';
import Add from './pages/Add';
import Edit from './pages/Edit';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' Component={UserDetails}></Route>
        <Route path='/add' Component={Add}></Route>
        <Route path='/Edit/:id' Component={Edit}></Route>
      </Routes>
    </div>
  );
}

export default App;
