import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import OneMovie from './Pages/OneMovie'
import Header from './Components/Header'
import MyProfile from './Pages/MyProfile'
import Footer from './Components/Footer'

const name = "Mattias"
const myBookings = [
  {
    title: "Inception",
    director: "Christofer Nolan",
  },
  {
    title: "Interstellar",
    director: "Christofer Nolan",
  },
]


function App() {

  return (
    <>
      <Router>
        <Header />
        <h2>Page showing:</h2>
        <Routes>
          <Route index path='/' element={<Home />}></Route>
          <Route index path='/oneMovie' element={<OneMovie />}></Route>
          <Route index path='/myProfile' element={<MyProfile name={name} bookings={myBookings} />}></Route>
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
