import './App.css';
import { CountriesList, Navbar } from './components'
import RootRoutes from './RootRoutes';
import countriesJson from './countries.json'
import {demo} from './axios'
function App() {
  

  console.log("el env", demo())
  return (
    //<BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className='container'>
          <div className='row'>
              <CountriesList countries={countriesJson}/>
              {/**La ruta nested */}
              <RootRoutes/>
          </div>
      </div>
    </div>
    //<BrowserRouter>
  );
}

export default App;
