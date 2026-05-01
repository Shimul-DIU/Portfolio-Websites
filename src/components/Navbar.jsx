import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {

  let [isopen, setIsOpen] = React.useState(false);
  return (
    <div>
      <nav>
        <div>
          <h1>MD. Shimul</h1>
        </div>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/projects"}>Projects</Link></li>
          <li><Link to={"/skills"}>Skills</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/blog"}>Blog</Link></li>
        </ul>
        <button>Resume</button>
       <button onClick={()=>{setIsOpen(!isopen)}}>
        <FontAwesomeIcon icon={isopen ? faXmark : faBars} />
       </button>
      </nav>
    </div>
  );
};

export default Navbar;