import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  LoginHeader,
} from './components/Header';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { ProfileInput } from './pages/auth/ProfileInput';

function App() {
  return (
    <Router>
      <LoginHeader />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/product" element={<></>} />
        <Route path="/chat" element={<></>} />
        <Route path="/mypage" element={<></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/profile" element={<ProfileInput />} />
      </Routes>
    </Router>
  );
}

export default App;
