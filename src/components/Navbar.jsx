import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 border-b bg-background '>
<span className='text-xl font-bold'>Alemeno</span>
<Button>Dashboard</Button>
    </div>
  )
}

export default Navbar