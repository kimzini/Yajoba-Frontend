import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { ProfileInput } from './pages/auth/ProfileInput';
import { ProductCreatePage } from './pages/product/ProductCreatePage';
import { ProductEditPage } from './pages/product/ProductEditPage';
import { ProductViewPage } from './pages/product/ProductViewPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/product" element={<ProductCreatePage />} />
        <Route path="/product/:id/edit" element={<ProductEditPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
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
