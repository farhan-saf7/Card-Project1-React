import UserCard from "./components/UserCard"
import './App.css'
import Saf from './assets/Saf.jpeg'
import Saf2 from './assets/saf2.jpeg'
import Saf3 from './assets/saf3.jpg'

function App() {

  return (
    <div className="container">
      <UserCard name="Saf" desc="Desc 1" img={Saf} style={{"border-radius":"10px"}}/>
      <UserCard name="Farhan" desc="Desc 2" img={Saf2} style={{"border-radius":"10px"}}/>
      <UserCard name="Azad" desc="Desc 3" img={Saf3} style={{"border-radius":"10px"}}/>
      <br /><br />
      <p>Author: Farhan Azad <br />
          This project has been developed by Farhan Azad as part of a learning journey in full-stack development. The goal of the project is to apply theoretical knowledge into practical implementation, showcasing skills in modern web technologies and problem-solving.</p>
      </div>
  )
}

export default App
