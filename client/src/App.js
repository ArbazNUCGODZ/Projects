import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './components/Home';
function App() {
  return (
   <>
     <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login/>}/>
                  <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
   </>
  );
}

export default App;
