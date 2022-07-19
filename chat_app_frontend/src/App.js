import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Chat from './pages/Chat';
import Login from './pages/Login';

function App() {
  return (
   <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
