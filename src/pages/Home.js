import React from 'react';
import { Carousel } from 'react-bootstrap';
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
import aboutBanner from '../images/video-banner.jpg';
import blog1 from '../images/blog-1.jpg';
import blog2 from '../images/blog-2.jpg';
import blog3 from '../images/blog-3.jpg';
import course1 from '../images/course-1.jpg';
import course2 from '../images/course-2.jpg';
import course3 from '../images/course-3.jpg';
import category1 from '../images/category-1.svg';
import category2 from '../images/category-2.svg';
import category3 from '../images/category-3.svg';
import category4 from '../images/category-4.svg';
 





import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Carousel Section */}
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img src={car3} className="d-block w-100" alt="Car 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={car2} className="d-block w-100" alt="Car 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={car1} className="d-block w-100" alt="Car 1" />
        </Carousel.Item>
      </Carousel>

      {/* Category Section */}
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

      {/* About Section */}
      <section className="section about" id="about" aria-label="about">
        <div className="container">
          <figure className="about-banner">
            <div className="img-holder" style={{ '--width': 520, '--height': 370 }}>
              <img
                src={aboutBanner} alt="About Banner"
                width="520"
                height="370"
                loading="lazy"
                className="img-cover"
              />
            </div>
          </figure>
          <div className="about-content">
            <p className="section-subtitle">About Us</p>
            <h2 className="h2 section-title">
              Over 10 Years in <span className="span">Distant Learning</span> for Skill Development
            </h2>
            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="about-list">
              <li className="about-item">
                <i className="icon ion-checkmark-done-outline"></i>
                <span className="span">Expert Trainers</span>
              </li>
              <li className="about-item">
                <i className="icon ion-checkmark-done-outline"></i>
                <span className="span">Online Remote Learning</span>
              </li>
              <li className="about-item">
                <i className="icon ion-checkmark-done-outline"></i>
                <span className="span">Lifetime Access</span>
              </li>
            </ul>
        </div>
        </div>
      </section>

      {/* Course Section */}
      <section className="section course" id="courses" aria-label="course">
        <div className="container">
          <p className="section-subtitle">Popular Courses</p>
          <h2 className="h2 section-title">Pick A Course To Get Started</h2>

          <ul className="grid-list">
            <li>
              <div className="course-card">
                <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                  <img
                    src={course1}
                    width="370"
                    height="220"
                    loading="lazy"
                    alt="Build Responsive Real- World Websites with HTML and CSS"
                    className="img-cover"
                  />
                </figure>
                <div className="abs-badge">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                  <span className="span">3 Weeks</span>
                </div>
                <div className="card-content">
                  <span className="badge">Beginner</span>
                  <h3 className="h3">
                    <a href="#" className="card-title">Build Responsive Real- World Websites with HTML and CSS</a>
                  </h3>
                  <div className="wrapper">
                    <div className="rating-wrapper">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <p className="rating-text">(5.0/7 Rating)</p>
                  </div>
                  <data className="price" value="29">$29.00</data>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                      <span className="span">8 Lessons</span>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                      <span className="span">20 Students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="course-card">
                <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                  <img
                    src={course2}                    width="370"
                    height="220"
                    loading="lazy"
                    alt="Build Responsive Real- World Websites with HTML and CSS"
                    className="img-cover"
                  />
                </figure>
                <div className="abs-badge">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                  <span className="span">8 Weeks</span>
                </div>
                <div className="card-content">
                  <span className="badge">Advanced</span>
                  <h3 className="h3">
                    <a href="#" className="card-title">Java Programming Masterclass for Software Developers</a>
                  </h3>
                  <div className="wrapper">
                    <div className="rating-wrapper">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <p className="rating-text">(5.0/7 Rating)</p>
                  </div>
                  <data className="price" value="29">$49.00</data>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                      <span className="span">15 Lessons</span>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                      <span className="span">35 Students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="course-card">
                <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                  <img
                     src={course3}  
                    width="370"
                    height="220"
                    loading="lazy"
                    alt="Build Responsive Real- World Websites with HTML and CSS"
                    className="img-cover"
                  />
                </figure>
                <div className="abs-badge">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                  <span className="span">3 Weeks</span>
                </div>
                <div className="card-content">
                  <span className="badge">Intermediate</span>
                  <h3 className="h3">
                    <a href="#" className="card-title">The Complete Camtasia Course for Content Creators</a>
                  </h3>
                  <div className="wrapper">
                    <div className="rating-wrapper">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <p className="rating-text">(4.9/7 Rating)</p>
                  </div>
                  <data className="price" value="29">$35.00</data>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="library-outline" aria-hidden="true"></ion-icon>
                      <span className="span">13 Lessons</span>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="people-outline" aria-hidden="true"></ion-icon>
                      <span className="span">18 Students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Add similar course cards here as needed */}
          </ul>

          <a href="#" className="btn has-before">
            <span className="span">Browse more courses</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>

        </div>

      </section>

      {/* Blog Section */}
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
                     src={blog2}                     width="370"
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
    </>
  );
};

export default Home;
