import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Detail, Form, Home, Landing } from "./views" //se creó un index views para poderlo traer aqui desestructurado
import { Route } from 'react-router-dom';
import style from "./App.css"

function App() {

const location = useLocation();

  return (
    <div className={style.body}>
    <div className="App">
      {/* <NavBar /> */}
      {location.pathname !== "/" && <NavBar /> }
      <Route exact path="/" render={() => <Landing />}/>
      <Route exact path="/home" render={() => <Home />}/>
      <Route exact path="/detail" render={() => <Detail />}/>  
      <Route path="/create" render={() => <Form />}/>

    </div>
    </div>
  );
}

export default App;
