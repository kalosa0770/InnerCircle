import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx';
import Register from './components/Register.jsx';
import LoginForm from './components/LoginForm.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import EmailVerify from './components/EmailVerify.jsx';
import UserDashboard from './user-components/UserDashboard.jsx';


function App() {

  

  return (
    <div className='w-full flex flex-col'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify" element={<EmailVerify />} />
        <Route path='/dashboard' element={<UserDashboard />} />
      </Routes>
      
    </div>
  )
}

export default App
