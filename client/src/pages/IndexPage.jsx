import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Hero from '../components/Hero';

export default function IndexPage() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}
