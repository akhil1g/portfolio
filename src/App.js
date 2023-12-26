import Starfield from 'react-starfield';
import Navbar from './navbar/navbar';
import Main from './Main.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';
import TechSkills from './pages/TechSkills/TechSkills.jsx'
import MyProjects from './pages/MyProjects/MyProjects.jsx'
import Experience from './pages/Experience/Experience.jsx'
import Education from './pages/Education/Education.jsx'
import CodingP from './pages/CodingProfiles/CodingP.jsx'
import { BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
    <body>
    <div className="App">
      <div className='star'>
     <Starfield
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      </div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/coding' element={<CodingP/>} />
        <Route path='/skills' element={<TechSkills/>} />
        <Route path='/projects' element={<MyProjects/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/education' element={<Education/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </body>
  );
}

export default App;
