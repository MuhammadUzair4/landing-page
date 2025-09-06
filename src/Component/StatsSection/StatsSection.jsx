import "./StatsSection.css";
import { Users, Bike, CalendarCheck2, CreditCard } from "lucide-react"; // icons

export default function StatsSection() {
  return (
    <section className="stats-section">
      {/* Top text */}
      <div className="stats-header">
        <h2>
          Helping a local <span>business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-item">
          <Users className="icon" />
          <div>
            <h3>2,245,341</h3>
            <p>Members</p>
          </div>
        </div>
        <div className="stat-item">
          <Bike className="icon" />
          <div>
            <h3>46,328</h3>
            <p>Clubs</p>
          </div>
        </div>
        <div className="stat-item">
          <CalendarCheck2 className="icon" />
          <div>
            <h3>828,867</h3>
            <p>Event Bookings</p>
          </div>
        </div>
        <div className="stat-item">
          <CreditCard className="icon" />
          <div>
            <h3>1,926,436</h3>
            <p>Payments</p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="about-footer">
        <div className="about-footer-img">
          <img src={`${process.env.PUBLIC_URL}/Capture2.PNG`} alt="Illustration" />
        </div>
        <div className="about-footer-text">
          <h2>How to design your site footer like we did</h2>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisl
            facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
            urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
            quis massa. Praesent felis est, finibus et nisi ac, hendrerit
            venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}
