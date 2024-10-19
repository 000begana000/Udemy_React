import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="3 cups and napkin on a plate" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>Cart(0)</button>
      </nav>
    </header>
  );
}
