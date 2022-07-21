import logo from "./logo.svg";
import "./App.css";
import UserItem from "./components/UserItem"
function App() {
  //V1 COMPONENT
  // MyCard nombre del componente
  //1.- Function component

  function MyCard(props) {
    console.log("que son los props", props);
    return (
      <div>
        <p>{props.username}</p>
        <a href={props.github}>
          <button className={props.buttonColor}>Go to my github</button>
        </a>
      </div>
    );
  }
  //lista de nombres con sus githubs
  const listUsers = [
    {
      username:"Carlos Perez",
      github:"https://github.com/RenaniaCode"
    },
    {
      username:"Emmanuel Solis",
      github:"https://github.com/emmanuelsolis",
    },
    {
      username:"Ana Luz",
      github:'https://github.com/analuzma'
    },
    {
      username:"Spartan Dev",
      github:'https://github.com/analuzma'
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyCard
          customPerro={{}} //props custom puede ser lo que tu quieras!!
          buttonColor="success"
          username="Dylan Torres"
          github="https://www.github.com/foggyrocket"
        />
        <MyCard
          buttonColor="danger"
          username="Carlos Perez"
          github="https://github.com/RenaniaCode"
        />
      </header>




      {/* crearemos una lista dinamica!!!  */}
      { listUsers.map((user,index_user)=> (
          <UserItem 
            key={index_user}
            username={user.username} 
            github={user.github} 
            />
        )) 
      }
    </div>
  );
}

export default App;
