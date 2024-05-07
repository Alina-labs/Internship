import './App.css'
import SignUp from './pages/Auth/SignUp1'
// import ASignUp from './pages/Admin/ASignUp'
// import ASignIn from './pages/Admin/ASignIn';
import SignIn from './pages/Auth/SignIn1';
import Landing from './pages/Landing/Landing1';
import Dashboard from './pages/Dashboard/dashboard'
import Navbar from './pages/Common/Navbar';
import Footer from './pages/Common/Footer';
import Products from './pages/products/product';
import Cart from './pages/Cart/Cart'
import Cart1 from './pages/Cart/cart1';
import Product1 from './pages/products/product1';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './redux/store';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <About /> */}
      {/* <SignUp /> */}
      {/* <ASignUp /> */}
      {/* <ASignIn /> */}
      <BrowserRouter>
        <Navbar />
      <Provider store = {store} >
      <Routes>
        {/* <Route path="/asignin" element={<ASignIn />} />
        <Route path="/asignup" element={<ASignUp />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart1" element={<Cart1 />} />
        <Route path="/product1" element={<Product1 />} />
      </Routes>
      </Provider>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
