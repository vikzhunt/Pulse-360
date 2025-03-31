import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from './components/LoginPage/Auth'
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path='/' element={<Auth />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
