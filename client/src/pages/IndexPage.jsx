import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Plan from '../components/Plan';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
export default function IndexPage() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <NavBar />
      <Hero />
      <Offers />
      <Plan />
      <ImageSlider />
      <Footer />

    </div>
  );
}
