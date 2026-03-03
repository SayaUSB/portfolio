import { useState, useEffect, useMemo } from "react";

const Typewriter = () => {
  const strings = useMemo(
    () => ["Ustu Bina Syahdiba", "a Robotics Engineer"],
    []
  );

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const currentString = strings[currentIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText((prev) => {
          const updated = prev.slice(0, -1);

          if (updated.length === 0) {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
          }

          return updated;
        });
      } else {
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, strings]);

  return (
    <h1>
      Hello, I am <br />
      {currentText}
      <span className="cursor">|</span>
    </h1>
  );
};

export default Typewriter;