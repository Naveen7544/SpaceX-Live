import React, { useEffect, useState } from "react";
import rocket_logo from "../assets/rocket_logo.png";
import rocketlog2 from "../assets/rocket-log2.png";
import Satellite from "../assets/Satellite.png";
import Tooltip from "@mui/material/Tooltip";
import { ImWikipedia } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

function Dashboard() {
  const bgImage =
    "https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg";
  return (
    <div className="main-container">
      <div className="dashboard">
        <div className="first-container">
          <div className="box1">
            <div className="boxone-A">
              <h1 style={{ paddingBottom: "10px" }}>Upcoming launch</h1>
              <h2>MISSION NAME</h2>
              <p>USSF-44</p>
              <h2>ROCKET</h2>
              <p>Falcon Heavy</p>
              <h2>FLIGHT NUMBER</h2>
              <p>188</p>
              <h2>TIME (UTC)</h2>
              <p>Nov 01, 01:41 PM</p>
              <h2>LINKS</h2>
              <Tooltip title="Wikipedia Unavailable" arrow>
                <div className="social-icon-disabled">
                  <ImWikipedia />
                </div>
              </Tooltip>
              <Tooltip title="Youtube" arrow>
                <div className="social-icon">
                  <FaYoutube
                    onClick={() => {
                      window.open(
                        "https://www.youtube.com/watch?v=pY628jRd6gM&ab_channel=SpaceX",
                        "_blank"
                      );
                    }}
                  />
                </div>
              </Tooltip>
              <Tooltip title="Reddit Unavailable" arrow>
                <div className="social-icon-disabled">
                  <FaRedditAlien />
                </div>
              </Tooltip>
            </div>
            <div>
              <div className="wrapper">
                <h2 className="rocket-logo">ROCKET LOGO</h2>
                <div className="boxone-B">
                  <img className="crew-img" src={rocket_logo} alt="Logo" />
                </div>
                <h2>LAUNCHPAD</h2>
                <p>KSC LC 39A</p>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="lunch-facilities" style={{ paddingTop: "10px" }}>
              <h1>Launch facilities</h1>
            </div>
            <div className="boxtwo-A">
              <img
                src="https://live.staticflickr.com/65535/50137510881_3f675bb620_h.jpg"
                alt="Your Image"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "100px",
                  filter: "contrast(110%)",
                }}
              />
              <div className="overlay-text">
                <div className="section-A">
                  <div className="">
                    <p>Cape Canaveral</p>
                    <h2>LC-39A & SLC-40</h2>
                  </div>
                  <div className="">
                    <h2>REGION</h2>
                    <p>Florida</p>
                  </div>
                </div>
                <div className="section-A">
                  <div className="">
                    <h2>TEMP</h2>
                    <p>23°C</p>
                  </div>
                  <div className="">
                    <h2>WEATHER</h2>
                    <p>Clear</p>
                  </div>
                  <div className="">
                    <h2>WIND</h2>
                    <p>5 m/s</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="boxtwo-A">
              <img
                src="https://live.staticflickr.com/65535/50906488116_c44db82fc1_k.jpg"
                alt="Your Image"
                style={{ width: "100%", objectFit: "cover", height: "100px" }}
              />
              <div className="overlay-text">
                <div className="section-A">
                  <div className="">
                    <p>Starbase Boca Chica</p>
                    <h2>Starship Launch Facility</h2>
                  </div>
                  <div className="">
                    <h2>REGION</h2>
                    <p>Texas</p>
                  </div>
                </div>
                <div className="section-A">
                  <div className="">
                    <h2>TEMP</h2>
                    <p>16°C</p>
                  </div>
                  <div className="">
                    <h2>WEATHER</h2>
                    <p>Clouds</p>
                  </div>
                  <div className="">
                    <h2>WIND</h2>
                    <p>10 m/s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="box1">
            <div className="boxone-A">
              <h1>Previous launch</h1>
              <h2>MISSION NAME</h2>
              <p>Crew-5</p>
              <h2>ROCKET</h2>
              <p>Falcon 9</p>
              <h2>FLIGHT NUMBER</h2>
              <p>187</p>
              <h2>TIME (UTC)</h2>
              <p>Oct 05, 04:00 PM</p>
              <h2>LINKS</h2>
              <Tooltip
                title="Wikipedia Unavailable"
                arrow
                className="custom-tooltip "
              >
                <div className="social-icon">
                  <ImWikipedia
                    onClick={() => {
                      window.open(
                        "https://en.wikipedia.org/wiki/SpaceX_Crew-5",
                        "_blank"
                      );
                    }}
                  />
                </div>
              </Tooltip>
              <Tooltip title="Youtube" arrow>
                <div className="social-icon">
                  <FaYoutube
                    onClick={() => {
                      window.open(
                        "https://www.youtube.com/watch?v=5EwW8ZkArL4&ab_channel=SpaceX",
                        "_blank"
                      );
                    }}
                  />
                </div>
              </Tooltip>
              <Tooltip title="Reddit Unavailable" arrow>
                <div className="social-icon-disabled">
                  <FaRedditAlien />
                </div>
              </Tooltip>
            </div>
            <div>
              <div className="wrapper">
                <h2 className="mission-patch">MISSION PATCH</h2>
                <div className="boxone-B">
                  <img className="crew-img" src={rocketlog2} alt="Logo" />
                </div>
                <h2 className="crew">CREW</h2>
                <div className="crew-men">
                  <IoPerson className="smaller-icon" />
                  <IoPerson className="smaller-icon" />
                  <IoPerson className="smaller-icon" />
                  <IoPerson className="smaller-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="box1">
            <h className="starlink">Starlink</h>
            <div className="box-four">
              <div style={{ position: "relative", display: "inline-block" }}>
                <img src={Satellite} alt="Logo" />
                <svg
                  className="blink_me"
                  style={{ position: "absolute", top: 21, left: 81 }}
                >
                  <circle cx="50" cy="50" r="4" fill="rgb(0, 236, 9)" />
                </svg>
              </div>

              <p>
                There are currently 3268 active Starlink satellites on the low
                Earth orbit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
