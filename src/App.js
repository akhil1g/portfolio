import Starfield from 'react-starfield';
import Main from './Main.jsx';
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
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      </BrowserRouter>
    </div>
    </body>
  );
}

export default App;
