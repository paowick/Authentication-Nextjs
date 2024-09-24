'use client'
import React, { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/" className="navbar-logo">MyApp</Link> {/* Using Link for client-side navigation */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isOpen ? (
        <ul>
          <li><Link href="/admin/dashboard">Dashboard</Link></li> {/* Use Link instead of <a> */}
          <li><Link href="/admin/user-mgmt">User</Link></li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
