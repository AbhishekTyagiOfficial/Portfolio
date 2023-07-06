import React from "react";
import "../App.css";
import images from "../images/self2.png";
import imagesp from "../images/portfolio-01.jpg";
import SocialFollow from "../SocialFollow";
import { Link, Outlet } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Price from "./Price";

// const MyComponent = () => {
//   const handleType = (count: number) => {
//     // access word count number
//     console.log(count);
//   };
// };

// const handleDone = () => {
//   console.log(`Done after 5 loops!`);
// };

export default function Home() {
  return (
    <>
      <div className="container mt-5">
        <section id="home">
          <div className="row mb-5 d-flex flex-column-reverse flex-md-row mt-5">
            <div
              className="col-md-8 col-sm-12 col-xs-12 text-start"
              // data-aos="fade-right"
              // data-aos-duration="1000"
            >
              <div className="mt-5">
                <span className="subtitle">Welcome to my world</span>
              </div>
              <h1 className="title mt-3">
                Hi, I'm
                <span className="name mt-3 text-danger"> Abhishek Tyagi</span>
                <br />
                <span className="profession  mt-5">a </span>
                <Typewriter
                  words={[
                    "Professional Coder",
                    "Web Developer",
                    "Software Tester",
                  ]}
                  loop="true"
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
              </h1>
              <p className="description mt-5 text-start">
                I will design and develop modern and responsive websites using
                HTML, CSS and JavaScript. I am very passionate and dedicated to
                my work. I have acquired the skills and knowledge necessary to
                make your project a success.
              </p>
            </div>
            <div
              className="thumbnail col-md-4 col-sm-12 col-xs-12 my-auto shadow-lg bg-body-tertiary "
              data-aos="fade-left"
              data-aos-duration="3000"
              // data-aos-offset="500"
              style={
                {
                  // height: "26rem",
                  // background: "#66666608",
                  // borderRadius: "10px",
                }
              }
            >
              <img
                src={images}
                alt="self2_image"
                style={{
                  width: "100%",
                  // margin: "-6rem",
                  // borderRadius: "20%",
                }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* What i Do */}

      <div className="container my-5">
        <section id="what_do">
          <div className="what_do_title text-start">
            <span className="what_do_feature">Feature</span>
            <h1 className="what_do_heading ">What I Do</h1>
          </div>
          <div className="row my-5">
            <div className="col-md-4 col-sm-12 col-xs-12 ">
              <div className="we_do_content text-start  ">
                <div class="card" id="cards">
                  <div class="card-body my-3 mx-3">
                    <div className="container-fluid">
                      <div className="icon my-5">
                        {/* <h5>icon</h5> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-menu"
                        >
                          <line x1="3" y1="12" x2="21" y2="12"></line>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                      </div>
                      <div className="we_do_text ">
                        <div className="we_do_text_heading">
                          <h3>Business Stratagy</h3>
                        </div>
                        <span className="we_do_description">
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="we_do_content text-start ">
                <div class="card" id="cards">
                  <div class="card-body my-3 mx-3">
                    <div className="container-fluid">
                      <div className="icon my-5">
                        {/* <h5>icon</h5> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-book-open"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                      </div>
                      <div className="we_do_text">
                        <div className="we_do_text_heading">
                          <h3>App Development</h3>
                        </div>
                        <span className="we_do_description">
                          It uses a dictionary of over 200 Latin words, combined
                          with a handful of model sentence.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="we_do_content text-start ">
                <div class="card" id="cards">
                  <div class="card-body my-3 mx-3">
                    <div className="container-fluid">
                      <div className="icon icon my-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-tv"
                        >
                          <rect
                            x="2"
                            y="7"
                            width="20"
                            height="15"
                            rx="2"
                            ry="2"
                          ></rect>
                          <polyline points="17 2 12 7 7 2"></polyline>
                        </svg>
                      </div>
                      <div className="we_do_text">
                        <div className="we_do_text_heading">
                          <h3>App Development</h3>
                        </div>
                        <span className="we_do_description">
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row my-5">
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="we_do_content text-start ">
                    <div class="card" id="cards">
                      <div class="card-body my-3 mx-3">
                        <div className="container-fluid">
                          <div className=" icon my-5">
                            {/* <h5>icon</h5> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-twitch"
                            >
                              <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                            </svg>
                          </div>
                          <div className="we_do_text">
                            <div className="we_do_text_heading">
                              <h3>Mobile App</h3>
                            </div>
                            <span className="we_do_description">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="we_do_content text-start ">
                    <div class="card" id="cards">
                      <div class="card-body my-3 mx-3">
                        <div className="container-fluid">
                          <div className="icon my-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-wifi"
                            >
                              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                              <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                              <line x1="12" y1="20" x2="12.01" y2="20"></line>
                            </svg>
                          </div>
                          <div className="we_do_text">
                            <div className="we_do_text_heading">
                              <h3>CEO Marketing</h3>
                            </div>
                            <span className="we_do_description">
                              always free from repetition, injected humour, or
                              non-characteristic words etc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="we_do_content text-start ">
                    <div class="card" id="cards">
                      <div class="card-body my-3 mx-3">
                        <div className="container-fluid">
                          <div className="icon my-5">
                            {/* <h5>icon</h5> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-slack"
                            >
                              <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path>
                              <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                              <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path>
                              <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path>
                              <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path>
                              <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
                              <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path>
                              <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>
                            </svg>
                          </div>
                          <div className="we_do_text">
                            <div className="we_do_text_heading">
                              <h3>Personal Portfolio April</h3>
                            </div>
                            <span className="we_do_description">
                              It uses a dictionary of over 200 Latin words,
                              combined with a handful of model sentence.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* My Portfolio */}

      <div className="container my-5">
        <section id="what_do">
          <div className="what_do_title text-center">
            <span className="we_do_portfolio">
              Visit My portfolio and keep your Feedback
            </span>
            <h1 className="what_do_heading ">My Portfolio</h1>
          </div>
          <div className="row my-5">
            <div className="col-md-4 col-sm-12 col-xs-12 ">
              <div className="we_do_content text-start  ">
                <div class="card" id="cards">
                  <div class="card-body my-3 mx-3">
                    <div className="container-fluid">
                      <div className="icon">
                        <img
                          src={imagesp}
                          alt="portfolio-1"
                          style={{
                            width: "100%",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <div className="we_do_text my-4">
                        <div className="category_info">
                          <ul>
                            <li>Development</li>
                            <li>600</li>
                          </ul>
                        </div>
                        <div className="we_do_text_heading">
                          <span>The services provide for design</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="we_do_content text-start ">
                <div class="card" id="cards">
                  <div class="card-body my-3 mx-3">
                    <div className="container-fluid">
                      <div className="icon">
                        <img
                          src={imagesp}
                          alt="portfolio-1"
                          style={{ width: "100%", borderRadius: "10px" }}
                        />
                      </div>
                      <div className="we_do_text my-4">
                        <div className="we_do_text_heading">
                          <div className="category_info">
                            <ul>
                              <li>Application</li>
                              <li>750</li>
                            </ul>
                          </div>
                        </div>
                        <span>Mobile app landing design & app maintain</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="we_do_content text-start ">
                <div class="card" id="cards">
                  <div class="card-body my-3 mx-3">
                    <div className="container-fluid">
                      <div className="icon">
                        <img
                          src={imagesp}
                          alt="portfolio-1"
                          style={{ width: "100%", borderRadius: "10px" }}
                        />
                      </div>
                      <div className="we_do_text my-4">
                        <div className="we_do_text_heading">
                          <h3>App Development</h3>
                        </div>
                        <span>Logo design creativity & Application</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row my-5">
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="we_do_content text-start ">
                    <div class="card" id="cards">
                      <div class="card-body my-3 mx-3">
                        <div className="container-fluid">
                          <div className="icon">
                            <img
                              src={imagesp}
                              alt="portfolio-1"
                              style={{ width: "100%", borderRadius: "10px" }}
                            />
                          </div>
                          <div className="we_do_text my-4">
                            <div className="we_do_text_heading">
                              <h3>App Development</h3>
                            </div>
                            <span>Mobile app landing design & Services</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="we_do_content text-start ">
                    <div class="card" id="cards">
                      <div class="card-body my-3 mx-3">
                        <div className="container-fluid">
                          <div className="icon">
                            <img
                              src={imagesp}
                              alt="portfolio-1"
                              style={{ width: "100%", borderRadius: "10px" }}
                            />
                          </div>
                          <div className="we_do_text my-4">
                            <div className="we_do_text_heading">
                              <h3>App Development</h3>
                            </div>
                            <span>Design for tecnology & services</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="we_do_content text-start ">
                    <div class="card" id="cards">
                      <div class="card-body my-3 mx-3">
                        <div className="container-fluid">
                          <div className="icon">
                            <img
                              src={imagesp}
                              alt="portfolio-1"
                              style={{ width: "100%", borderRadius: "10px" }}
                            />
                          </div>
                          <div className="we_do_text my-4">
                            <div className="we_do_text_heading">
                              <h3>App Development</h3>
                            </div>
                            <span>App for tecnology & services</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About */}
      <div className="container mt-5">
        <section id="about">
          <div
            className="row"
            // data-aos="fade-down" data-aos-duration="1500"
          >
            <h1>About Me</h1>
            <div className="col-md-12 col-sm-12 col-xs-12 text-start my-4">
              <p>
                Hi! My name is Abhishek Tyagi. I am from Saharanpur and I am
                Post Graduate from Gharwal University where I have completed my
                Masters in the field of Computer Application. I am a Front-End
                Web Developer, and I am very passionate and dedicated to my
                work. Since my school days, I have been quite curious about
                websites and software - How they work? and always wanted to work
                in the field of Web Development or Software Development. With
                this curiosity I have learned C/C++ languages in my school days.
                And in my college days, I mainly focused in the field of Web
                Development and start working with some basic languages like
                HTML, CSS, JavaScript, Bootstrap, Php, React js , Java and
                DataBase : MySql, PLSQL etc. I have acquired the skills and
                knowledge necessary to make your project a success. Talking
                about my interests and hobbies, I am really interested in making
                websites. That is why I opted to pursue my bachelors in the
                field of Computer Science & Engineering. Apart from this, I am
                also interested in travelling - exploring new places,
                photography, meditation, and solving mathematics problems.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Personal Profile */}

      <div className="container mt-5">
        <section id="personal_profile">
          <div className="profile mt-3 mb-5">
            <div className="row">
              <h5
                className="text-start"
                // data-aos="fade-down"
                // data-aos-duration="1500"
              >
                Personal Profile
              </h5>
              <div
                className="col-md-4 col-sm-12 col-xs-12 "
                // data-aos="fade-down"
                // data-aos-duration="1500"
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
                // data-aos="fade-down"
                // data-aos-duration="1500"
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
        </section>
      </div>
      <div className="container mt-5">
        <section id="education">
          <div className="container mb-3">
            <div className="row">
              <h2
                className="title_education mb-5"
                // data-aos="fade-down"
                // data-aos-duration="1500"
              >
                My Education
              </h2>
              <div
                className="col-md-3 col-sm-12 col-xs-12 "
                // data-aos="fade-down"
                // data-aos-duration="1500"
              >
                <Link to="mca">
                  <div className="btn btn-dark w-100 p-3 mb-5">
                    <span className="list-unstyled">POST GRADUATION</span>{" "}
                  </div>
                </Link>
              </div>
              <div
                className="col-md-3 col-sm-12 col-xs-12 "
                // data-aos="fade-down"
                // data-aos-duration="1500"
              >
                <Link to="bsc">
                  <div className="btn btn-dark w-100 p-3 mb-5">
                    <span className="">GRADUATION</span>
                  </div>
                </Link>
              </div>
              <div
                className="col-md-3 col-sm-12 col-xs-12 "
                // data-aos="fade-down"
                // data-aos-duration="1500"
              >
                <Link to="intermediate">
                  <div className="btn btn-dark w-100 p-3 mb-5">
                    <span>INTERMEDIATE</span>
                  </div>
                </Link>
              </div>
              <div
                className="col-md-3 col-sm-12 col-xs-12 "
                // data-aos="fade-down"
                // data-aos-duration="1500"
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
        </section>
      </div>
      <Price />
      {/* Portfolio */}
      <div className="container mt-5">
        <section id="portfolio">
          <div className="container my-5 mb-5">
            <div className="row ml-auto">
              <h1> My Portfolio</h1>
              <div className="row row-cols-1 row-cols-md-3 g-3 mx-auto">
                <div className="col">
                  <div
                    className="card h-100"
                    // data-aos="fade-down"
                    // data-aos-duration="1500"
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
                    // data-aos="fade-down"
                    // data-aos-duration="1500"
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
                    // data-aos="fade-down"
                    // data-aos-duration="1500"
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
        </section>
      </div>
      <div className="container mt-5">
        <section id="contact">
          <div className="container pb-5">
            <div className="row">
              <h1 className="title_contact  my-5">Contact Me</h1>
              <div
                className="col-md-6 col-sm-12 col-xs-12 my-5"
                // data-aos="fade-down"
                // data-aos-duration="2000"
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
                // data-aos="fade-down"
                // data-aos-easing="linear"
                // data-aos-duration="2000"
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
        </section>
      </div>
    </>
  );
}
