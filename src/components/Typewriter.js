import { useState, useEffect } from 'react';

const Typewriter = () => {
  const strings = ["Ustu Bina Syahdiba", "a Robotics Engineer"];
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const handleTyping = () => {
      const currentString = strings[currentIndex];

      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText.length === 1) { // When text becomes empty after this deletion
          setTimeout(() => {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % strings.length);
          }, pauseTime);
        }
      } else {
        if (currentText.length < currentString.length) {
          setCurrentText(prev => currentString.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, strings]);

  return (
    <h1>Hello, I am<br />{currentText}<span className="cursor">|</span></h1>
  );
};

export default Typewriter;
