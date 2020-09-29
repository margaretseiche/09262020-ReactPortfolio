import React, { Component } from "react";
// import API from "../utils/API";
// import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import "./style.css";

const style = {
  image: {
    marginRight: "10px"
  },

}

class Portfolio extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <main>
          <div className="container-fluid">
            <article id="parentportfolio">
              <div className="row articleHeading" id="portfolioheading">
                <div className="col-md-12">
                  <h3>Check out some of my projects</h3>
                </div>
              </div>

              <div className="row col-md-12" id="portfolio">

                <div className="col-md-4" id="front">

                  <div className="row" id="featurePortfolioHeading">Front-End
                <div className="row">

                      <div className="col-sm">
                        <div className="card" id="portfolio-card">
                          <img src="./assets/images/TravelPlanner.JPG" className="card-img-top" id="card-image"
                            alt="travel planning website" />
                          <div className="card-body">
                            <h5 className="card-title">Travel Planner</h5>
                            <p className="card-text">Partnered with 4 other developers to create a trip search engine using 3 APIs
                        </p>
                            <a href="https://margaretseiche.github.io/Project-1-Playground/" className="btn btn-primary"
                              id="button" style={style.image} target="_blank" rel="noopener noreferrer">Plan a Trip</a>
                            <a href="https://github.com/margaretseiche/Project-1-Playground" className="btn btn-primary"
                              id="button" target="_blank" rel="noopener noreferrer">See the Code</a>
                          </div>
                        </div>

                      </div>

                      <div className="col-sm">
                        <div className="card" id="portfolio-card">
                          <img src="./assets/images/PasswordGenerator.JPG" className="card-img-top" id="card-image"
                            alt="snapshot of password generator" />
                          <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text">Created a means for users to generate random passwords with specified
                          criteria</p>
                            <a href="https://margaretseiche.github.io/05212020-Password-Generator/" className="btn btn-primary"
                              id="button" style={style.image} target="_blank" rel="noopener noreferrer">Try it Out</a>
                            <a href="https://github.com/margaretseiche/05212020-Password-Generator" className="btn btn-primary"
                              id="button" target="_blank" rel="noopener noreferrer">See the Code</a>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm">

                        <div className="card" id="portfolio-card">
                          <img src="./assets/images/DayPlanner.JPG" className="d-block w-100" alt="" />
                          <div className="card-body">
                            <h5 className="card-title">Day Planner with Weather Update</h5>
                            <p className="card-text">Used Moment.js, local storage, and a weather API to create a scheduling app
                        </p>
                            <a href="https://margaretseiche.github.io/07072020-DayPlannerAndWeather/" className="btn btn-primary"
                              id="button" target="_blank" rel="noopener noreferrer">Plan Your Day</a>
                            <a href="https://github.com/margaretseiche/07072020-DayPlannerAndWeather" className="btn btn-primary"
                              id="button" target="_blank" rel="noopener noreferrer">See the Code</a>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-md-4" id="back">

                  <div className="row" id="featurePortfolioHeading">Back-End
                <div className="row">

                      <div className="col-sm">
                        <div className="card" id="portfolio-card">
                          <img src="./assets/images/local4.JPG" className="card-img-top" id="card-image" alt="" />
                          <div className="card-body">
                            <h5 className="card-title">Burger App</h5>
                            <p className="card-text">Deployed a food ordering app on Heroku with MySQL and Handlebars</p>
                            <a href="https://mburgerapp.herokuapp.com" className="btn btn-primary" id="button"
                              target="_blank" rel="noopener noreferrer">Order a Burger</a><br />
                            <a href="https://github.com/margaretseiche/08082020-Handlebars-Burgers" className="btn btn-primary"
                              id="button" target="_blank" rel="noopener noreferrer">See the Code</a>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm">

                        <div className="card" id="portfolio-card">
                          <img src="./assets/images/EmployeeDirectory.JPG" className="d-block w-100" alt="" />
                          <div className="card-body">
                            <h5 className="card-title">Team Directory</h5>
                            <p className="card-text">Developed a Command Line Interface for creating a team profile webpage with
                          Handlebars</p>
                            <a href="https://youtu.be/yS8ZmDgy3n8" className="btn btn-primary"
                              id="button" target="_blank" rel="noopener noreferrer">Watch the demo</a>
                            <a href="https://github.com/margaretseiche/07162020-EmployeeDirectory" className="btn btn-primary"
                              id="button" target="_blank" rel="noopener noreferrer">See the Code</a>


                          </div>
                        </div>
                      </div>

                      <div className="col-sm">
                        <div className="card" id="portfolio-card">
                          <img src="./assets/images/ReadMeDemo.JPG" className="card-img-top" id="card-image"
                            alt="snapshot of password generator" />
                          <div className="card-body">
                            <h5 className="card-title">ReadMe Generator</h5>
                            <p className="card-text">Created a command line interface for developers to make formatted ReadMe files</p>
                            <a href="https://youtu.be/C4KLrUpt-M8" className="btn btn-primary"
                              id="button" style={style.image} target="_blank" rel="noopener noreferrer">Watch the demo</a>
                            <a href="https://github.com/margaretseiche/07112020-ReadmeGenerator" className="btn btn-primary"
                              id="button" target="_blank" rel="noopener noreferrer">See the Code</a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-md-4" id="other">
                  <div className="row" id="featurePortfolioHeading">Other Experience
                <div className="row">

                      <div className="col-sm">
                        <div className="card" id="portfolio-card">
                          <img src="./assets/images/FBCwebsite.JPG" className="card-img-top" id="card-image"
                            alt="redesigned website homepage" />
                          <div className="card-body">
                            <h5 className="card-title">Website Re-design</h5>
                            <p className="card-text">Using a new platform, I re-designed
                          a trilingual website, taking it from text-heavy to personable.</p>

                            <a href="./assets/Churchwebsite_originalversion.pdf" className="btn btn-primary" id="button"
                              style={style.image} target="_blank" rel="noopener noreferrer">Before</a>
                            <a href="https://www.fbcflushing.org/" className="btn btn-primary" id="button"
                              target="_blank" rel="noopener noreferrer">After</a>
                          </div>
                        </div>

                      </div>
                      <div className="col-sm">
                        <div className="card" id="portfolio-card">
                          <video src="./assets/acamis.mp4" className="card-img-top" controls muted >Video of a
                        conference</video>
                          <div className="card-body">
                            <h5 className="card-title">Event Management</h5>
                            <p className="card-text">During leadership transition and project expansion, I led 9 teams remotely
                          for 5 conferences, 10 workshops, 7 sports leagues, and 5 cultural events. (Video by: In-kind sponsor Eduku)</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm">

                        <div className="card" id="portfolio-card">
                          <div id="carouselExampleIndicators" className="carousel slide">
                            <ol className="carousel-indicators">
                              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                            </ol>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img src="./assets/images/FriendsPage1.JPG" className="d-block w-100"
                                  alt="Friends of Dulwich Beijing" />
                              </div>
                              <div className="carousel-item">
                                <img src="./assets/images/FriendsPage2.JPG" className="d-block w-100"
                                  alt="Friends means friendship." />
                              </div>
                              <div className="carousel-item">
                                <img src="./assets/images/FriendsPage3.JPG" className="d-block w-100" alt="Fun while fundraising" />
                              </div>
                              <div className="carousel-item">
                                <img src="./assets/images/FriendsPage4.JPG" className="d-block w-100"
                                  alt="Partnership with the school." />
                              </div>
                              <div className="carousel-item">
                                <img src="./assets/images/FriendsPage5.JPG" className="d-block w-100"
                                  alt="Fundraising is part of Friends." />
                              </div>
                              <div className="carousel-item">
                                <img src="./assets/images/FriendsPage6.JPG" className="d-block w-100"
                                  alt="Friends is about friendship too." />
                              </div>
                              <div className="carousel-item">
                                <img src="./assets/images/FriendsPage7.JPG" className="d-block w-100"
                                  alt="There is a place for you with Friends." />
                              </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                              data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                              data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a>
                          </div>

                          <div className="card-body">
                            <h5 className="card-title">Non-Profit Management</h5>
                            <p className="card-text">With a team, grew retail and event surpluses 64% annually for 10 years.</p>
                            <a href="./assets/Friends2006to2016.pdf" className="btn btn-primary" id="button"
                              target="_blank" rel="noopener noreferrer">Download the PDF</a>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

            </article>
          </div>
        </main>
      </div>
    );
  }
}

export default Portfolio;
