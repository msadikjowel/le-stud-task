import './App.css';
import ImageGallery from './components/ImageGallery';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ImageGallery />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
