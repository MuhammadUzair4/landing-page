import "./blog.css";

export default function Blog() {
  return (
    <section className="blog-section">
      {/* Testimonial Section */}
      <div className="testimonial">
        <div className="testimonial-img">
          <img src={`${process.env.PUBLIC_URL}/image 9.png`} alt="Customer Logo" />
        </div>
        <div className="testimonial-text">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
            sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
            Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
            molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
            molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
            ultrices, quis tristique nulla sodales. Suspendisse potenti.
          </p>
          <h4>Tim Smith</h4>
          <p className="company">British Dragon Boat Racing Association</p>

          <div className="testimonial-logos">
            <img src={`${process.env.PUBLIC_URL}/Logo (7).png`} alt="logo1" />
            <img src={`${process.env.PUBLIC_URL}/Logo (8).png`} alt="logo2" />
            <img src={`${process.env.PUBLIC_URL}/Logo (9).png`} alt="logo3" />
            <img src={`${process.env.PUBLIC_URL}/Logo (10).png`} alt="logo4" />
            <img src={`${process.env.PUBLIC_URL}/Logo (11).png`} alt="logo5" />
            <img src={`${process.env.PUBLIC_URL}/Logo (12).png`} alt="logo5" />
            <span className="cta">Meet all customers →</span>
          </div>
        </div>
      </div>

      {/* Blog Articles Section */}
      <div className="articles">
        <h2>Caring is the new marketing</h2>
        <p>
          The Nextcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lots more.
        </p>

        <div className="blog-cards">
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/image 1.png`} alt="Blog 1" />
            <div className="card-text">
              <h3>
                Creating Streamlined Safeguarding Processes with OneRen
              </h3>
              <a href="#">Readmore →</a>
            </div>
          </div>

          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/image 2.png`} alt="Blog 2" />
            <div className="card-text">
              <h3>
                What are your safeguarding responsibilities and how can you manage them?
              </h3>
              <a href="#">Readmore →</a>
            </div>
          </div>

          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/image 3.png`} alt="Blog 3" />
            <div className="card-text">
              <h3>
                Revamping the Membership Model with Triathlon Australia
              </h3>
              <a href="#">Readmore →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
