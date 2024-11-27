import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/Main/page';
import ProductCreatePage from './pages/Product/Create/page';
import ProductEditPage from './pages/Product/Edit/page';
import ProductViewPage from './pages/Product/View/page';
import ChatPage from './pages/Chat/page';
import LoginPage from './pages/Auth/Login/page';
import SignupPage from './pages/Auth/Signup/page';
import MyPage from './pages/Mypage/page';
import OnboardingPage from './pages/Onboarding/page';
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/profile" element={<OnboardingPage />} />
        <Route path="/profile" element={<MyPage />} />
        <Route path="/contract/Input" element={<DefaultContractPage />} />
        <Route path="/contract/Completed" element={<CompletedContractPage />} />
      </Routes>
    </Router>
  );
}

export default App;