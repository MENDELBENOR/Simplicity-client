import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Welcome from './pages/Welcome';
import MainContent from './pages/MainContent';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { initialUser } from './redux/slices/userSlice';
import NumberInputForm from './pages/NumberInputForm';
import SendEmailOtp from './components/SendEmailOtp';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initialUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Toaster position="bottom-right" />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/sendEmail' element={<SendEmailOtp />} />
        <Route path="/otp/:email" element={<NumberInputForm />} />
        <Route element={<Layout />}>
          <Route path='/users' element={<MainContent />} />
          <Route path='/about' element={<div>About Page</div>} />
          <Route path='/contact' element={<div>Contact Page</div>} />
          <Route path='/profile' element={<div>Profile Page</div>} />
          <Route path='/dev' element={<div>Dev Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;