import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Welcome from './pages/Welcome';
import MainContent from './pages/MainContent';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route
          element={<Layout />}
        >
          <Route path='/users' element={<MainContent />} />
          <Route path='/about' element={<div>About Page</div>} />
          <Route path='/services' element={<div>Services Page</div>} />
          <Route path='/contact' element={<div>Contact Page</div>} />
          <Route path='/profile' element={<div>Profile Page</div>} />
          <Route path='/dev' element={<div>Dev Page</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
