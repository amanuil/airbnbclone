import Link from 'next/link'
import React from 'react'
import {NavLinks} from '@/constants/index'
import AuthProvider from '../AuthProvider'

function Navbar() {
    const session = {}
  return (

    <nav className='flexBetween navbar'>
        <div className="flex-1 flexStart gap-10">
            <Link href='/'><h1>[r_r]</h1></Link>
            <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
        <div className="flexcenter gap-4">
            {session? (
                <>
                userPhoto
                <Link href='/create-project'>
                    share Work
                </Link>
                </>
            ):(
                <AuthProvider />
            )}
        </div>
        </div>
    </nav>
   
  )
}

export default Navbar