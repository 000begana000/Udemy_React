import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logoImg}
        alt="react quiz logo image a empty paper with strings between 2 pens"
      />
      <h1>ReactQuiz</h1>
    </header>
  );
}
