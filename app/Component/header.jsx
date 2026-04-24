"use client"
import React from 'react'
import Link from 'next/link'
import '../css/header.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Header = () => {
    const pathname=usePathname()
  return (
    <header className="header">
    <Image 
        src="/images/logo.png" 
        alt="logo" 
        width={120} 
        height={50}
      />
      
      <nav className="nav">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Our Services</Link>
        <Link href="/project" className={pathname === '/project' ? 'active' : ''}>Our Projects</Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link>
        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
      </nav>

      <button className="btn">Get Started</button>
    </header>
  )
}

export default Header