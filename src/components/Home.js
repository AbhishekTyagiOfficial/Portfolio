import React from "react";
import "../App.css";
import images from "../images/one.jpg";
import SocialFollow from "../SocialFollow";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mb-5 d-flex flex-column-reverse flex-md-row mt-5">
          <div
            className="col-md-8 col-sm-12 col-xs-12 text-start"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className=" mt-5">
              <span className="subtitle">Welcome to my world</span>
            </div>
            <h1 className="title mt-3">
              Hi, I'm
              <span className="name mt-3 text-danger"> Abhishek Tyagi</span>
              <br />
              <span className="profession  mt-5">
                a Front-end Web Developer
              </span>
            </h1>
            <p className="description mt-5 text-start">
              I will design and develop modern and responsive websites using
              HTML, CSS and JavaScript. I am very passionate and dedicated to my
              work. I have acquired the skills and knowledge necessary to make
              your project a success.
            </p>
          </div>
          <div
            className="col-md-4 col-sm-12 col-xs-12 my-auto shadow-lg bg-body-tertiary rounded-circle "
            data-aos="fade-left"
            data-aos-duration="1500"
            // data-aos-offset="500"
          >
            <img
              src={images}
              alt="One_image"
              style={{
                width: "100%",
                borderRadius: "20%",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row" data-aos="fade-down" data-aos-duration="1500">
          <h1>About Me</h1>
          <div className="col-md-12 col-sm-12 col-xs-12 text-start my-4">
            <p>
              Hi! My name is Abhishek Tyagi. I am from Saharanpur and I am Post
              Graduate from Gharwal University where I have completed my Masters
              in the field of Computer Application. I am a Front-End Web
              Developer, and I am very passionate and dedicated to my work.
              Since my school days, I have been quite curious about websites and
              software - How they work? and always wanted to work in the field
              of Web Development or Software Development. With this curiosity I
              have learned C/C++ languages in my school days. And in my college
              days, I mainly focused in the field of Web Development and start
              working with some basic languages like HTML, CSS, JavaScript,
              Bootstrap, Php, React js , Java and DataBase : MySql, PLSQL etc. I
              have acquired the skills and knowledge necessary to make your
              project a success. Talking about my interests and hobbies, I am
              really interested in making websites. That is why I opted to
              pursue my bachelors in the field of Computer Science &
              Engineering. Apart from this, I am also interested in travelling -
              exploring new places, photography, meditation, and solving
              mathematics problems.
            </p>
          </div>
        </div>
        <div className="profile mt-3 mb-5">
          <div className="row">
            <h5
              className="text-start"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Personal Profile
            </h5>
            <div
              className="col-md-4 col-sm-12 col-xs-12 "
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <ul className="details text-start list-unstyled">
                <li>
                  Birthday : <span>29-03-1998</span>
                </li>

                <li>
                  Gender : <span>Male</span>
                </li>
                <li>
                  Nationalty : <span>Indian</span>
                </li>
              </ul>
            </div>
            <div
              className=" col-md-8 col-sm-12 col-xs-12"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <ul className="details text-start list-unstyled">
                <li>
                  Qualification : <span>MCA</span>
                </li>

                <li>
                  Languages : <span>Hindi and English</span>
                </li>
                <li>
                  Interests : <span>Coding, Cricket</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mb-3">
          <div className="row">
            <h2 className="title_education mb-5">My Education</h2>
            <div
              className="col-md-3 col-sm-12 col-xs-12 "
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Link to="mca">
                <div className="btn btn-dark w-100 p-3 mb-5">
                  <span className="list-unstyled">POST GRADUATION</span>{" "}
                </div>
              </Link>
            </div>
            <div
              className="col-md-3 col-sm-12 col-xs-12 "
              data-aos="flip-down"
              data-aos-duration="2000"
            >
              <Link to="bsc">
                <div className="btn btn-dark w-100 p-3 mb-5">
                  <span className="">GRADUATION</span>
                </div>
              </Link>
            </div>
            <div
              className="col-md-3 col-sm-12 col-xs-12 "
              data-aos="flip-right"
              data-aos-duration="3000"
            >
              <Link to="intermediate">
                <div className="btn btn-dark w-100 p-3 mb-5">
                  <span>INTERMEDIATE</span>
                </div>
              </Link>
            </div>
            <div
              className="col-md-3 col-sm-12 col-xs-12 "
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <Link to="matrix">
                <div className="btn btn-dark w-100 p-3 mb-5">
                  <span>MATRICULATE</span>
                </div>
              </Link>
            </div>
            <Outlet />
          </div>
        </div>

        <div className="container my-5 mb-5">
          <div className="row ml-auto">
            <h1> My Portfolio</h1>
            <div className="row row-cols-1 row-cols-md-3 g-3 mx-auto">
              <div className="col">
                <div
                  className="card h-100"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <img src={images} className="card-img-top" alt="..." />
                  <div className="card-body text-dark">
                    <h5 className="card-title">PERSONAL WEBSITE</h5>
                    <p className="card-text ">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card h-100"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <img src={images} className="card-img-top" alt="..." />
                  <div className="card-body text-dark">
                    <h5 className="card-title">CURD APPLICATION IN JAVA</h5>
                    <p className="card-text">This is a short card.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card h-100"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img src={images} className="card-img-top" alt="..." />
                  <div className="card-body text-dark">
                    <h5 className="card-title">GAME ZONE WEBSITE</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <div className="row">
            <h1 className="title_contact  my-5">Contact Me</h1>
            <div
              className="col-md-6 col-sm-12 col-xs-12 my-5"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="content text-start">
                <p>
                  I am available for freelance work. Please fill out this form
                  to contact with me or connect with me on my social accounts.
                </p>
              </div>
              {/* <div className="contect_me "> */}
              <h4 className="title_connect_with_me text-start my-5">
                CONNECT WITH ME
              </h4>
              <SocialFollow />
              <ul className="d-flex links list-unstyled">
                {/* <li className="facebook ">Facebook</li>
                <li className="facebook mx-2">Instagram</li>
                <li className="facebook mx-2">LinkedIn</li>
                <li className="facebook mx-2">Github</li> */}
              </ul>
              {/* </div> */}
            </div>
            <div
              className="col-md-6 col-sm-12 col-xs-12 my-5"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="container">
                <form
                  action="mailto:abhishektyagi99831@gmail.com"
                  method="post"
                  encType="text/plain"
                >
                  <div className="form-group">
                    {/* <label for="name">Name</label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    {/* <label for="email">Email</label> */}
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    {/* <label for="message">Message</label> */}
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-danger form-control my-5 p-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
