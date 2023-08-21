import Form from '../component/Form'
import Auth from '../component/Auth'
import { useState } from 'react'
import './App.css'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Form setToken={setToken} token={token} />
      <Auth setToken={setToken} token={token} />
    </>
  )
}

export default App