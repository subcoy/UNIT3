import React  from 'react'
import './App.css'
import { SinglePlayer } from  './components/SinglePlayer';
import {AllPlayers} from './components/AllPlayers'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';




function App() {

  return (
          <React.Fragment>
              <BrowserRouter>
                <nav>
                  <Link to="/">All Players</Link>
                  <Link to="/players">Single Player</Link>
                </nav>

                  <Routes>
                      <Route path='/' element={<AllPlayers/>} />
                      <Route path='/players' element={<SinglePlayer />} /> 
                  </Routes>
              </BrowserRouter>
          </React.Fragment>
         )
}

export default App
