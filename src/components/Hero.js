import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <Typewriter />
          <p>Robotics & AI Engineer | Reinforcement Learning Enthusiast</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="/resume.pdf" className="btn secondary" download>Download CV</a>
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images.jpeg`} alt="Ustu Bina Syahdiba" className="hero-photo" />
      </div>
    </section>
  );
};

export default Hero;
