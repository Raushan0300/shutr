import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import FeedPage from './components/FeedPage/FeedPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/reset' element={<ForgotPassword />} />
        <Route path='/feed' element={<FeedPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
