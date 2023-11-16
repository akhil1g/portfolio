import Starfield from 'react-starfield';
import Intro from './intro/intro';
import Navbar from './navbar/navbar';
import Skills from './skills/skills';
import Projects from './projects/projects';
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
      <Intro/>
      <Skills />
      <Projects />
    </div>
    </body>
  );
}

export default App;