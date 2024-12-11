import blog1 from '../images/blog-1.jpg';
import blog2 from '../images/blog-2.jpg';
import blog3 from '../images/blog-3.jpg';

const Blogs = () => {
  return (
    /* Blog Section */
    <section className="section blog" aria-label="blog">
      <div className="container">
        <p className="section-subtitle">Our Blog</p>
        <h2 className="h2 section-title">
          Read Our Latest <span className="span">News</span>
        </h2>

        <ul className="grid-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                <img
                  src={blog1}
                  width="370"
                  height="220"
                  loading="lazy"
                  alt="5 Skills Every Entrepreneur Needs to Learn"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">5 Skills Every Entrepreneur Needs to Learn</a>
                </h3>
                <p className="card-text">
                  The world of entrepreneurship can be challenging. But with the right skills, it becomes much easier...
                </p>
                <a href="#" className="card-link">Continue Reading</a>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                <img
                  src={blog2}
                  width="370"
                  height="220"
                  loading="lazy"
                  alt="5 Skills Every Entrepreneur Needs to Learn"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">5 Skills Every Entrepreneur Needs to Learn</a>
                </h3>
                <p className="card-text">
                  The world of entrepreneurship can be challenging. But with the right skills, it becomes much easier...
                </p>
                <a href="#" className="card-link">Continue Reading</a>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                <img
                  src={blog3}
                  width="370"
                  height="220"
                  loading="lazy"
                  alt="5 Skills Every Entrepreneur Needs to Learn"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">5 Skills Every Entrepreneur Needs to Learn</a>
                </h3>
                <p className="card-text">
                  The world of entrepreneurship can be challenging. But with the right skills, it becomes much easier...
                </p>
                <a href="#" className="card-link">Continue Reading</a>
              </div>
            </div>
          </li>
          {/* Add similar blog cards here as needed */}
        </ul>

        <a href="#" className="btn has-before">
          <span className="span">Browse more blog posts</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>
      </div>
    </section>
  );
};

export default Blogs;
