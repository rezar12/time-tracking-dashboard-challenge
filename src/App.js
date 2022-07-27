import React, { useState, useEffect } from "react";
import "./App.scss";
import avatar from "./images/image-jeremy.png";
import iconwork from "./images/icon-work.svg";
import iconplay from "./images/icon-play.svg";
import iconstudy from "./images/icon-study.svg";
import iconexercise from "./images/icon-exercise.svg";
import iconsocial from "./images/icon-social.svg";
import iconselfCare from "./images/icon-self-care.svg";
import data from "./data.json";

function App() {
  /*-------------------------- constante title */
  const work = data[0];
  const play = data[1];
  const study = data[2];
  const exercise = data[3];
  const social = data[4];
  const selfCare = data[5];
   /*------------------------------ Time frame */
  const [timeFrame, setTimeFrame] = useState("daily");
  /*---------- Time frame  current and previous */
  const [workcurrentTime, setWorkcurrentTime] = useState(
    work.timeframes.daily.current
  );
  const [workpreviousTime, setWorkpreviousTime] = useState(
    work.timeframes.daily.previous
  );
  const [playcurrentTime, setPlaycurrentTime] = useState(
    play.timeframes.daily.current
  );
  const [playpreviousTime, setPlaypreviousTime] = useState(
    play.timeframes.daily.previous
  );
  const [studycurrentTime, setStudycurrentTime] = useState(
    study.timeframes.daily.current
  );
  const [studypreviousTime, setStudypreviousTime] = useState(
    study.timeframes.daily.previous
  );
  const [exercisecurrentTime, setExercisecurrentTime] = useState(
    exercise.timeframes.daily.current
  );
  const [exercisepreviousTime, setExercisepreviousTime] = useState(
    exercise.timeframes.daily.previous
  );
  const [socialcurrentTime, setSocialcurrentTime] = useState(
    social.timeframes.daily.current
  );
  const [socialpreviousTime, setSocialpreviousTime] = useState(
    social.timeframes.daily.previous
  );
  const [selfCarecurrentTime, setSelfCarecurrentTime] = useState(
    selfCare.timeframes.daily.current
  );
  const [selfCarepreviousTime, setSelfCarepreviousTime] = useState(
    selfCare.timeframes.daily.previous
  );
  /*--------------- active link */
  const [state, setState] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
    
  useEffect(() => {
    if (timeFrame === "daily") {
      setWorkcurrentTime(work.timeframes.daily.current);
      setPlaycurrentTime(play.timeframes.daily.current);
      setStudycurrentTime(study.timeframes.daily.current);
      setExercisecurrentTime(exercise.timeframes.daily.current);
      setSocialcurrentTime(social.timeframes.daily.current);
      setSelfCarecurrentTime(selfCare.timeframes.daily.current);
      setWorkpreviousTime(work.timeframes.daily.previous);
      setPlaypreviousTime(play.timeframes.daily.previous);
      setStudypreviousTime(study.timeframes.daily.previous);
      setExercisepreviousTime(exercise.timeframes.daily.previous);
      setSocialpreviousTime(social.timeframes.daily.previous);
      setSelfCarepreviousTime(selfCare.timeframes.daily.previous);
      setState2(false);
      setState3(false);
      setState(true);
    }
    if (timeFrame === "weekly") {
      setWorkcurrentTime(work.timeframes.weekly.current);
      setPlaycurrentTime(play.timeframes.weekly.current);
      setStudycurrentTime(study.timeframes.weekly.current);
      setExercisecurrentTime(exercise.timeframes.weekly.current);
      setSocialcurrentTime(social.timeframes.weekly.current);
      setSelfCarecurrentTime(selfCare.timeframes.weekly.current);
      setWorkpreviousTime(work.timeframes.weekly.previous);
      setPlaypreviousTime(play.timeframes.weekly.previous);
      setStudypreviousTime(study.timeframes.weekly.previous);
      setExercisepreviousTime(exercise.timeframes.weekly.previous);
      setSocialpreviousTime(social.timeframes.weekly.previous);
      setSelfCarepreviousTime(selfCare.timeframes.weekly.previous);
      setState(false);
      setState3(false);
      setState2(true);
    }
    if (timeFrame === "monthly") {
      setWorkcurrentTime(work.timeframes.monthly.current);
      setPlaycurrentTime(play.timeframes.monthly.current);
      setStudycurrentTime(study.timeframes.monthly.current);
      setExercisecurrentTime(exercise.timeframes.monthly.current);
      setSocialcurrentTime(social.timeframes.monthly.current);
      setSelfCarecurrentTime(selfCare.timeframes.monthly.current);
      setWorkpreviousTime(work.timeframes.monthly.previous);
      setPlaypreviousTime(play.timeframes.monthly.previous);
      setStudypreviousTime(study.timeframes.monthly.previous);
      setExercisepreviousTime(exercise.timeframes.monthly.previous);
      setSocialpreviousTime(social.timeframes.monthly.previous);
      setSelfCarepreviousTime(selfCare.timeframes.monthly.previous);
      setState(false);
      setState2(false);
      setState3(true);
    }
  }, [timeFrame]);

  return (
    <section className="dashboard">
      <div className="user--section">
        <div className="user--section--top">
          <div className="avatar">
            <img src={avatar} alt="user avatar" />
          </div>
          <div className="info">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="user--section--bottom">
          <ul>
            <li
              className="link"
              onClick={() => setTimeFrame("daily")}
              style={{ color: state ? "white" : "hsl(236, 100%, 87%)" }}
            >
              Daily
            </li>
            <li
              className="link"
              onClick={() => setTimeFrame("weekly")}
              style={{ color: state2 ? "white" : "hsl(236, 100%, 87%)" }}
            >
              Weekly
            </li>
            <li
              className="link"
              onClick={() => setTimeFrame("monthly")}
              style={{ color: state3 ? "white" : "hsl(236, 100%, 87%)" }}
            >
              Monthly
            </li>
          </ul>
        </div>
      </div>
      <div className="card--work">
        <img src={iconwork} alt="work" />
        <div className="card--work--info">
          <div className="title">
            <h2>Work</h2>
            <div className="option">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="time">
            <div className="current">
              <h1>
                <span>{workcurrentTime}</span>
                <span>hrs</span>
              </h1>
            </div>
            <div className="previous">
              <p>
                Last Week - <span>{workpreviousTime}hrs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card--play">
        <img src={iconplay} alt="play" />
        <div className="card--play--info">
          <div className="title">
            <h2>Play</h2>
            <div className="option">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="time">
            <div className="current">
              <h1>
                <span>{playcurrentTime}</span>
                <span>hrs</span>
              </h1>
            </div>
            <div className="previous">
              <p>
                Last Week - <span>{playpreviousTime}hrs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card--study">
        <img src={iconstudy} alt="study" />
        <div className="card--study--info">
          <div className="title">
            <h2>Study</h2>
            <div className="option">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="time">
            <div className="current">
              <h1>
                <span>{studycurrentTime}</span>
                <span>hrs</span>
              </h1>
            </div>
            <div className="previous">
              <p>
                Last Week - <span>{studypreviousTime}hrs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card--exercise">
        <img src={iconexercise} alt="exercise" />
        <div className="card--exercise--info">
          <div className="title">
            <h2>Exercise</h2>
            <div className="option">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="time">
            <div className="current">
              <h1>
                <span>{exercisecurrentTime}</span>
                <span>hrs</span>
              </h1>
            </div>
            <div className="previous">
              <p>
                Last Week - <span>{exercisepreviousTime}hrs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card--social">
        <img src={iconsocial} alt="social" />
        <div className="card--social--info">
          <div className="title">
            <h2>Social</h2>
            <div className="option">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="time">
            <div className="current">
              <h1>
                <span>{socialcurrentTime}</span>
                <span>hrs</span>
              </h1>
            </div>
            <div className="previous">
              <p>
                Last Week - <span>{socialpreviousTime}hrs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card--selfCare">
        <img src={iconselfCare} alt="self care" />
        <div className="card--selfCare--info">
          <div className="title">
            <h2>Self Care</h2>
            <div className="option">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="time">
            <div className="current">
              <h1>
                <span>{selfCarecurrentTime}</span>
                <span>hrs</span>
              </h1>
            </div>
            <div className="previous">
              <p>
                Last Week - <span>{selfCarepreviousTime}hrs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
