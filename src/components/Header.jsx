import globe from "../assets/globe.png";

export default function Header() {
  return (
    <header className="header">
      <img src={globe} alt="globe icon" />
      <h1 className="header-title">my travel journey.</h1>
    </header>
  );
}
