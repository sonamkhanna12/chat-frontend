
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import {LinkContainer} from 'react-router-bootstrap'
function App() {
  return (
    <BrowserRouter>

    <Navigation />
    <Routes>
   <Route path='/' element={<Home />} />
   <Route path='login' element={<Login />} />
   <Route path='Signup' element={<Signup />}/>
   <Route path='chat' element={<Chat />}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
