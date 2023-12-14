import React, { useState } from "react";
import "./landingpage.scss";
import Bell from "../../assets/Bell.webp";
import Eye from "../../assets/Eye.webp";
import Vector from "../../assets/Vector.webp";

import Cohortimage from "../../assets/Cohortimage.webp";
import Carousel from "../../Camponent/Carousel/Carousel";
import BottomCard from "../../Camponent/bottomcard/BottomCard";
import BellCard from "../../Camponent/bellcard/BellCard";
import BarChartCard from "../../Camponent/barchartcard/BarChartCard";
import ClockCard from "../../Camponent/clockcard/ClockCard";
const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);

    if (isValid) {
      window.location.href = "https://app.loch.one/welcome";
    } else {
      setIsValidEmail(false);
    }
  };

  const data = [
    {
      name: "Jack F",
      designation: "Ex Blackrock PM",
      content:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      name: "Yash P",
      designation: "Research, 3poch Crypto Hedge Fund",
      content:
        "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
    },
    {
      name: "Shiv S",
      designation: "Co-Founder Magik Labs",
      content:
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
    {
      name: "Jack F",
      designation: "Ex Blackrock PM",
      content:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      name: "Yash P",
      designation: "Research, 3poch Crypto Hedge Fund",
      content:
        "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
    },
    {
      name: "Shiv S",
      designation: "Co-Founder Magik Labs",
      content:
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
  ];

  const cardComponents = data.map((item, index) => <BottomCard data={item} />);

  return (
    <div className="landing">
      <div className="leftColumn">
        <div className="notificationContainer">
          <div className="notificationMessage">
            <div className="notificationIcon">
              <img src={Bell} alt="Bell" />
            </div>
            <p className="message">
              Get notified when a highly correlated whale makes a move
            </p>
            <p className="messageBottom">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <div className="notificationCarousel">
            <BellCard />
            <BarChartCard />
            <ClockCard />
          </div>
        </div>
        <div className="cohortContainer">
          <div className="cohortImage">
            <img src={Cohortimage} alt="Cohortimage" />
          </div>
          <div className="cohortText">
            <div className="notificationIcon">
              <img src={Eye} alt="Eye" />
            </div>
            <p className="message">Watch what the whales are doing</p>
            <p className="messageBottom">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
        <div className="testimonials">
          <p>Testimonials</p>
        </div>
        <div className="carouselContianer">
          <div>
            <div className="lochIcon">
              <div className="vecPos">
                <img src={Vector} alt="Vector" />
              </div>
            </div>
          </div>

          <div className="carouselCom">
            <Carousel slides={cardComponents} slideWidth={420} />
          </div>
        </div>
      </div>
      <div className="rightColumn">
        <h1>Sign up for exclusive access.</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your email address"
            value={email}
            onChange={handleEmailChange}
            className={!isValidEmail ? "invalid" : ""}
          />
          {!isValidEmail && (
            <p className="error-message">Please enter a valid email address </p>
          )}
          <button type="submit">Get started</button>
          <p>You’ll receive an email with an invite link to join.</p>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
