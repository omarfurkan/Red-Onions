import './App.css';
import Header from './Components/Shared/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import FoodDetail from './Components/FoodDetail/FoodDetail';
import Signup from './Components/Signup/Signup';
import CheckOut from './Components/CheckOut/CheckOut';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/food/:foodId" element={
          <RequireAuth>
            <FoodDetail />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
