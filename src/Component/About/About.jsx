import "./about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={`${process.env.PUBLIC_URL}/Capture1.PNG`} alt="About" />
      </div>

      <div className="about-text">
        <h2>The unseen of spending three years at Pixelgrade</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque
          placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. 
          Nullam pulvinar sit amet risus pretium auctor.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </section>
  );
}
