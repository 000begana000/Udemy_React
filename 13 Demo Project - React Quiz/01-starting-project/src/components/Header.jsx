import logoImage from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logoImage}
        alt="a react quiz logo image with a note and 2 pens"
      />
      <h1>ReactQuiz</h1>
    </header>
  );
}
