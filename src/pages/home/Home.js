import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
      <div className="homeLanding">
        <section className="home" id="home">
          <div className="text">
            <h1><span>Welcome</span> to <br /> QR Scanner</h1><p>Seamlessly scan QR codes using our user-friendly application, simplifying <br />the process of accessing information effortlessly</p>
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
                <p>
                  Welcome to our Vehicle Registration App! We are dedicated to simplifying and streamlining the process of registering vehicles within our company premises.
                </p>
                <p>
                  Our mission is to provide a seamless and efficient solution for managing and monitoring vehicle entries, ensuring security and convenience for all stakeholders.
                </p>
                <h4>Our Commitment:</h4>
                <p>
                  We are committed to continuous improvement and staying at the forefront of technological advancements. Our development team works tirelessly to enhance the functionality of our app, addressing the evolving needs of our users.
                </p>
                <h4>Values:</h4>
                <p>
                  Transparency, innovation, and user-centric design are at the core of our values. We believe in open communication with our users and welcome feedback that helps us refine and optimize our services.
                </p>
                <p className="btn">Learn More</p>
              </div>

            </div>
          </section>
        </div>

        <div className="services-section">
          <section className="services" id="Services">

            <div className="row">
              <div className="heading">
                <span>Key Features</span>
                <h1>We Provide Best Services</h1>
              </div>
            </div>

            <div className="row">

              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i class="fa-solid fa-qrcode"></i>
                  </div>
                  <h3>QR Code Registration</h3>
                  <p>Generate QR codes for quick and easy vehicle registration, with full details and proper research.
                  </p>
                </div>
              </div>


              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i class="fa-solid fa-stopwatch"></i>
                  </div>
                  <h3>Instant Access</h3>
                  <p>
                    Expedite entry at the gate using QR code scans, it's time effecient than normal checkings
                  </p>
                </div>
              </div>


              <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i class="fa-solid fa-fingerprint"></i>
                  </div>
                  <h3>Enhanced Security</h3>
                  <p>
                    Ensure the safety and security of our premises through efficient vehicle management.
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
                          <img src='/img/rev2.jpg' alt='rev2' />
                        </div>

                        <div className="name-user">
                          <strong>Rahul Shah</strong>
                          <span>shahrahul@gmail.com</span>
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
                      <p>The security features in this app provide a sense of confidence. Knowing that my vehicle is registered and monitored efficiently adds a layer of safety to the entire experience.</p>
                    </div>
                  </div>
                  <div className="testimonial-box">

                    <div className="box-top">

                      <div className="profile">

                        <div className="profile-img">
                          <img src='/img/rev3.jpg' alt='rev3' />
                        </div>

                        <div className="name-user">
                          <strong>Aishwarya Singh</strong>
                          <span>aishwarya@gmail.com</span>
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
                      <p>I've been using the app for a while, and the team's dedication to improvement is evident. They listen to user feedback, making the app more user-friendly with each update. Great job!</p>
                    </div>
                  </div>
                  <div className="testimonial-box">

                    <div className="box-top">

                      <div className="profile">

                        <div className="profile-img">
                          <img src='/img/rev1.jpg' alt='rev1' />
                        </div>

                        <div className="name-user">
                          <strong>Raj Kapoor</strong>
                          <span>raj@gmail.com</span>
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
                      <p>I'm amazed by the simplicity of the registration process. The QR code system is a game-changer, and it makes entering the premises a breeze.</p>
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
                  <div className="text-one">Coaster Road</div>
                  <div className="text-two">New Delhi, India</div>
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
                  <div className="text-one">shamanitech@gmail.com</div>
                  <div className="text-two">shamani.auto@gmail.com</div>
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