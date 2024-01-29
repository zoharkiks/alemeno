import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 border-b bg-background '>
<Link href='/' className='text-xl font-bold'>Alemeno</Link>
<Link href='/dashboard/1'>
<Button>Dashboard</Button>
</Link>
    </div>
  )
}

export default Navbar