import './App.css';
import { Login } from './Pages/login';
import { SignUp } from './Pages/signup';
import { Home } from './Pages/home';
import { Cart } from './Pages/cart';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={SignUp} />
      <Route path="/cart" Component={Cart} />
      <Route path="/" Component={Home} />
    </Routes>
  )
}

export default App;
