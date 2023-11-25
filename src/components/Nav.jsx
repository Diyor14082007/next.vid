import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <>
    <nav>
        <Link href={'/'}>Next</Link>
        <Link href={'/home'}>Home</Link>
        <Link href={'/video'}>Video</Link>
    </nav>
    </>
  )
}

export default Nav