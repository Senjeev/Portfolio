import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

function App() {

  return (
    <>
   <div className='flex flex-col'>
   <div>
    <NavBar></NavBar>
    </div>
  <div className=" ">
  <Home></Home>
   <About></About>
   <Portfolio></Portfolio>
   <Skills></Skills>

   <Contact></Contact>
   <SocialLinks></SocialLinks>
  </div>
   </div>
  
    </>
  )
}

export default App
