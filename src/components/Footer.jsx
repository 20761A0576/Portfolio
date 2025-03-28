import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;