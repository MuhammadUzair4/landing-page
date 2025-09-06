import "./features.css";

export default function Features() {
  return (
    <section className="features" id="features">
      <h2>Manage your entire community </h2>
      <h2>in a single system</h2>
      <p>Who is Nexcent suitable for?</p>

      <div className="features-grid">
        <div className="feature-card">
          <img src={`${process.env.PUBLIC_URL}/Icon.png`} alt="Membership Organisations" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>

        <div className="feature-card">
          
          <img src={`${process.env.PUBLIC_URL}/Icon (1).png`} alt="National Associations" />
          <h3>National Associations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>

        <div className="feature-card">
          <img src={`${process.env.PUBLIC_URL}/Icon (2).png`} alt="Clubs And Groups" />
          <h3>Clubs And Groups</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments.
          </p>
        </div>
      </div>
    </section>
  );
}
