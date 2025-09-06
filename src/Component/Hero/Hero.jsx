import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Lessons and insights <br/> <span>from 8 years</span></h1>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <button className="btn">Register</button>
      </div>
      <div className="hero-img">
    <img src={`${process.env.PUBLIC_URL}/Capture.PNG`} alt="Illustration" />

      </div>
    </section>
  );
}
