import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Nexcent</div>
      <nav>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>
      <button className="btn">Register Now</button>
    </header>
  );
}
