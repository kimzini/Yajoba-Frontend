import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  LoginHeader,
} from './components/Header';
import { Login } from './pages/auth/Login';

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
      </Routes>
    </Router>
  );
}

export default App;
