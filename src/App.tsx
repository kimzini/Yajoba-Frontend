import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { ProfileInput } from './pages/auth/ProfileInput';
import { ProductCreatePage } from './pages/product/ProductCreatePage';
import { ProductEditPage } from './pages/product/ProductEditPage';
import { ProductViewPage } from './pages/product/ProductViewPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { ChatPage } from './pages/chat/ChatPage';
import { MainPage } from './pages/main/MainPage';
import DefaultContractPage from './pages/contract/DefaultPage';
import CompletedContractPage from './pages/contract/CompletedPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductCreatePage />} />
        <Route path="/product/:id/edit" element={<ProductEditPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/profile" element={<ProfileInput />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contract/Input" element={<DefaultContractPage />} />
        <Route path="/contract/Completed" element={<CompletedContractPage />} />
      </Routes>
    </Router>
  );
}

export default App;
