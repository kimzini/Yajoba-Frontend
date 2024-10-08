import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HeaderWithoutSearch,
  HeaderWithSearch,
  LoginHeader,
} from './components/Header';

function App() {
  return (
    <Router>
      <LoginHeader />

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/product" element={<></>} />
        <Route path="/chat" element={<></>} />
        <Route path="/mypage" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
