import React from 'react'; // Import React
import category1 from '../images/category-1.jpg'; // Example for category image imports
import category2 from '../images/category-2.jpg';
import category3 from '../images/category-3.jpg';
import category4 from '../images/category-4.jpg';

// Category Section component
const Categories = () => {
  return (
    /* Category Section */
    <section className="section category" aria-label="category">
      <div className="container">
        <p className="section-subtitle">Categories</p>
        <h2 className="h2 section-title">
          Online <span className="span">Classes</span> For Remote Learning.
        </h2>
        <p className="section-text">
          Consectetur adipiscing elit sed do eiusmod tempor.
        </p>
        <ul className="grid-list">
          <li>
            <div className="category-card" style={{ '--color': '170, 75%, 41%' }}>
              <div className="card-icon">
                <img
                  src={category1}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Online Degree Programs"
                  className="img"
                />
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">Online Degree Programs</a>
              </h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span className="card-badge">7 Courses</span>
            </div>
          </li>
          <li>
            <div className="category-card" style={{ '--color': '351, 83%, 61%' }}>
              <div className="card-icon">
                <img
                  src={category2}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Non-Degree Programs"
                  className="img"
                />
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">Non-Degree Programs</a>
              </h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span className="card-badge">4 Courses</span>
            </div>
          </li>
          <li>
            <div className="category-card" style={{ '--color': '229, 75%, 58%' }}>
              <div className="card-icon">
                <img
                  src={category3}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Off-Campus Programs"
                  className="img"
                />
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">Off-Campus Programs</a>
              </h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span className="card-badge">8 Courses</span>
            </div>
          </li>
          <li>
            <div className="category-card" style={{ '--color': '42, 94%, 55%' }}>
              <div className="card-icon">
                <img
                  src={category4}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Hybrid Distance Programs"
                  className="img"
                />
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">Hybrid Distance Programs</a>
              </h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span className="card-badge">8 Courses</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories; // Exporting the component
