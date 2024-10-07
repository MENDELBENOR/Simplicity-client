import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Table from './components/TableUsers';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          element={<Layout />}
        >
          <Route path='/users' element={<Table />} />
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
