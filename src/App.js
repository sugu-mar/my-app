import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './components/HomePage'
import Signup from './components/SignupPage'
import Login from './components/LoginPage'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
// import List from '@mui/material/List'

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: 'flex-end' }}>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>

          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate('/signup')}>
            Signup
          </Button>
        </Toolbar>
      </AppBar>

      {/*   <ul>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>

          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {' '}
            <a href="/signup">Signup</a>
          </li>
          <li>
            {' '}
            <a href="/login">Login</a>
          </li>
        </ul> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={'error'} />
      </Routes>
    </div>
  )
}

export default App
