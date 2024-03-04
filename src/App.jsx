import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './components/Contact/Contact'
import Sell from './components/Sell/Sell'
import Buy from './components/Buy/Buy'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import MyList from './components/MyList/MyList'
import Nav from './components/Nav'
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
