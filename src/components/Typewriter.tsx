import { useTypewriter } from "../hooks/useTypewriter";

const Typewriter = () => {
  const { currentText } = useTypewriter();

  return (
    <h1>
      Hello, I am <br />
      {currentText}
      <span className="cursor">|</span>
    </h1>
  );
};

export default Typewriter;