import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
function App() {
  return (
    <>
      {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
    <Home />
    </>
  )
}

export default App
