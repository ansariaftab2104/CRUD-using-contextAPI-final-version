import React from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-300'>
      <Navbar/>
      <Form/>
      <UserCard/>
    </div>
  )
}

export default App