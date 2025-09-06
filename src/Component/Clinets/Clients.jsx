import "./clients.css";

export default function Clients() {
  return (
    <section className="clients">
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="logos">
        <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo 1" />
        <img src={`${process.env.PUBLIC_URL}/Logo (1).png`} alt="Logo 2" />
        <img src={`${process.env.PUBLIC_URL}/Logo (2).png`} alt="Logo 3" />
        <img src={`${process.env.PUBLIC_URL}/Logo (3).png`} alt="Logo 4" />
        <img src={`${process.env.PUBLIC_URL}/Logo (4).png`} alt="Logo 5" />
        <img src={`${process.env.PUBLIC_URL}/Logo (5).png`} alt="Logo 6" />
        <img src={`${process.env.PUBLIC_URL}/Logo (6).png`} alt="Logo 7" />
      </div>
    </section>
  );
}
