import Navbar from './components/Navbar/Navbar';
import Description from './components/Description/description';
import Proj1 from './cardtof/proj1.png';
import Proj2 from './cardtof/proj2.png' ;
import Proj3 from './cardtof/proj3.png';
import Proj4 from './cardtof/proj4.png';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr></hr>
      <Description className="try" name='EMNA'/>
      <hr></hr>
     <div className="project">
      <Project projectNumber="Project 1" photo={Proj1} />
      <Project projectNumber="Project 2" photo={Proj2}/>
      <Project projectNumber="Project 3" photo={Proj3}/>
      <Project projectNumber="Project 4" photo={Proj4}/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
