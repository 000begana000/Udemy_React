import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logoImg}
        alt="quiz logo with title of react quiz and little notebook image on the top of it"
      />
      <h1>ReactQuiz</h1>
    </header>
  );
}
