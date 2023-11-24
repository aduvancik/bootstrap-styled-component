import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
//components
import Navibar from './components/Navibar';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<Users />} />
          <Route path="users" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>


  )
}

export default App;
