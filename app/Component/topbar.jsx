'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiPhone, FiZap } from 'react-icons/fi'
import '../css/topbar.css'

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <FiZap size={16} className="topbar-icon" />
        <span>Celebrating 10 years : 2015 – 2025</span>
      </div>

      <div className="topbar-right">
        <FiPhone size={16} className="topbar-icon" />
        <span>Call us: <strong>(503) 381-8921</strong></span>

        <span className="divider">|</span>

        <Link href="#" aria-label="Facebook">
          <FaFacebook size={16} />
        </Link>

        <Link href="#" aria-label="LinkedIn">
          <FaLinkedin size={16} />
        </Link>

        <Link href="#" aria-label="Instagram">
          <FaInstagram size={16} />
        </Link>
      </div>
    </div>
  )
}

export default TopBar