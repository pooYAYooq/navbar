import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
      {showLinks && (
        <div className="links-container">
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navbar;
