const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <img src={`${process.env.PUBLIC_URL}/images.jpeg`} alt="Profile" />
          <span>Ustu Bina Syahdiba</span>
        </a>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
