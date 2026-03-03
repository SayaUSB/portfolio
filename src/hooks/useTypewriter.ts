import { useEffect, useState } from "react";

const DEFAULT_STRINGS = ["Ustu Bina Syahdiba", "a Robotics Engineer"];

export type UseTypewriterOptions = {
  strings?: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
};

export type UseTypewriterResult = {
  currentText: string;
  currentIndex: number;
  isDeleting: boolean;
};

export const useTypewriter = (
  options: UseTypewriterOptions = {}
): UseTypewriterResult => {
  const {
    strings = DEFAULT_STRINGS,
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseTime = 2000,
  } = options;

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    const currentString = strings[currentIndex] ?? "";
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (isDeleting) {
        setCurrentText((prev) => {
          const updated = prev.slice(0, -1);
          if (updated.length === 0) {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
          }
          return updated;
        });
        return;
      }

      if (currentText.length < currentString.length) {
        setCurrentText(currentString.slice(0, currentText.length + 1));
        return;
      }

      timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
    };

    timeoutId = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [currentIndex, currentText, deleteSpeed, isDeleting, pauseTime, strings, typeSpeed]);

  return {
    currentText,
    currentIndex,
    isDeleting,
  };
};
