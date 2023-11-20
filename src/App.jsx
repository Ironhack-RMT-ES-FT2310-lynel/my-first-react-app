// traer los estilos de App.css
import "./App.css"
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";

import Header from "./components/Header.jsx"
import Menu from "./components/Menu";
import Message from "./components/Message";

import ReactPlayer from 'react-player'

function App() {

  const user1 = {
    username: "Gandalf",
    profession: "Hechicero Gris"
  }

  const user2 = {
    username: "Saruman",
    profession: "Hechicero Blanco"
  }

  return (
    <div id="app">

      {/* <Header />

      <Menu />

      <Footer /> */}


      <Container>
        <Message color={"blue"}>
          <h3>Hola <span>Patata</span> </h3>
        </Message>
      </Container>

      <Message color={"red"}>
        <h3>Adios <span>Patata</span> </h3>
      </Message>
      

      <Container>
        <Card user={user1}/>
      </Container>

      <Container>
        <Card user={user2}/>
      </Container>

      <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' controls={true}/>

    </div>
  );
}

export default App;
