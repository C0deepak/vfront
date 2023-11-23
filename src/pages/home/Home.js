import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
      <div className="homeLanding">
        <section className="home" id="home">
          <div className="text">
            <h1><span>Welcome</span> to <br /> QR Scanner</h1><p>Lorem ipsum dolor sit amet consectetur <br />dipisicing elit. Assumenda, quasi.</p>
          </div>
        </section>

        <div className="about-section">
          <section className="about-landing" id="about-landing">
            <div className="heading">
              <span>About Us</span>
              <h1>Best Customer Experience</h1>
            </div>

            <div className="about-container">
              <div className="about-img">
                <img src='/img/about.png' alt="about" />
              </div>

              <div className="about-text">
                <span>About Us</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta eligendi neque nemo praesentium itaque saepe, dicta quae eum quidem modi, suscipit in natus placeat ipsa obcaecati ipsum aperiam amet et beatae recusandae earum minus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa ab qui reprehenderit hic modi, eos temporibus aliquam.</p>
                <p className="btn">Learn More</p>
              </div>

            </div>
          </section>
        </div>

        <div className="services-section">
          <section className="services" id="Services">

            <div className="row">
              <div className="heading">
                <span>Our Services</span>
                <h1>We Provide Best Services</h1>
              </div>
            </div>

            <div className="row">

              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-id-card"></i>
                  </div>
                  <h3>Documnets</h3>
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>


              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-file"></i>
                  </div>
                  <h3>Driver Details</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>


              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i className="fas fa-wrench"></i>
                  </div>
                  <h3>Checklist</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                    consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="reviews-section">
              <section id="testimonials">

                <div className="row">
                  <div className="heading">
                    <span>Testimonials</span>
                    <h1>Our Work Says About Us</h1>
                  </div>
                </div>

                <div className="testimonial-box-container">

                  <div className="testimonial-box">

                    <div className="box-top">

                      <div className="profile">

                        <div className="profile-img">
                          <img src='/img/rev1.jpg' alt='rev1' />
                        </div>

                        <div className="name-user">
                          <strong>Adarsh kumar</strong>
                          <span>adarshs738@gmsail.com</span>
                        </div>
                      </div>

                      <div className="reviews">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>

                    <div className="client-comment">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                  </div>

                  <div className="testimonial-box">

                    <div className="box-top">

                      <div className="profile">

                        <div className="profile-img">
                          <img src='/img/rev2.jpg' alt='rev2' />
                        </div>

                        <div className="name-user">
                          <strong>Adarsh kumar</strong>
                          <span>adarshs738@gmsail.com</span>
                        </div>
                      </div>

                      <div className="reviews">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>

                    <div className="client-comment">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                  </div>
                  <div className="testimonial-box">

                    <div className="box-top">

                      <div className="profile">

                        <div className="profile-img">
                          <img src='/img/rev3.jpg' alt='rev3' />
                        </div>

                        <div className="name-user">
                          <strong>Adarsh kumar</strong>
                          <span>adarshs738@gmsail.com</span>
                        </div>
                      </div>

                      <div className="reviews">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>

                    <div className="client-comment">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                  </div>
                </div>

              </section>
            </div>
          </section>
        </div>

        <section>
          <div className="row">
            <div className="heading">
              <span>Contact Us</span>
              <h1>Get In Touch</h1>
            </div>
          </div>

          <div className="contact-container">
            <div className="content">
              <div className="left-side">
                <div className="address details">
                  <i className="fas fa-map-marker-alt" style={{ color: "gray" }}></i>
                  <div className="topic">Address</div>
                  <div className="text-one">BIT SINDRI</div>
                  <div className="text-two">SINDRI, SHEHARPURA</div>
                </div>

                <div className="phone details">
                  <i className="fas fa-phone-alt" style={{ color: "gray" }}></i>
                  <div className="topic">Phone</div>
                  <div className="text-one">+0098 9893 5647</div>
                  <div className="text-two">+0096 3434 5678</div>
                </div>

                <div className="email details">
                  <i className="fas fa-envelope" style={{ color: "gray" }}></i>
                  <div className="topic">Email</div>
                  <div className="text-one">adarshs738@gmail.com</div>
                  <div className="text-two">adarshs738@gmail.com</div>
                </div>

              </div>

              <div className="right-side">
                <div className="topic-text">Send us a message</div>
                <p>If you have any query you can message here</p>
                <form action="#">
                  <div className="input-box">
                    <input type="text" placeholder="Enter your name" />
                  </div>

                  <div className="input-box">
                    <input type="text" placeholder="Enter your email" />
                  </div>

                  <div className="input-box message-box">
                    <input type="text-area" placeholder="Enter your message" />
                  </div>

                  <div className="button">
                    <input type="button" value="Send Now" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home