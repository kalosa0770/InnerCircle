import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx';
import Register from './components/Register.jsx';
import LoginForm from './components/LoginForm.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import UserDashboard from './user-components/UserDashboard.jsx';
import MoodQuestions from './user-components/MoodQuestions.jsx';
import MoodEntry from './user-components/MoodEntry.jsx';
import ResourcePage from './user-components/ResourcePage.jsx';
import TrackMoodPage from './user-components/TrackMoodPage.jsx';


function App() {

  

  return (
    <div className='w-full flex flex-col'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path='/dashboard' element={<UserDashboard />} />
        <Route path="/mood-entry" element={<MoodEntry />} />
        <Route path="/mood-questions/:mood" element={<MoodQuestions />} />
        <Route path="/explore" element={<ResourcePage />} />
        <Route path="/track" element={<TrackMoodPage />} />

      </Routes>
      
    </div>
  )
}

export default App
