import React, { useState } from "react";
import "./App.css";
// import {logWorksheetNames} from "./functionalities.js";

function DropdownList({ numDropdowns }) {
  const dropdowns = [...Array(numDropdowns)].map((_, i) => (
    <div className="center" key={i}>
      <select className="dropdown-inner padding" defaultValue="">
        <option value="" disabled>
          Select Subject
        </option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="English">English</option>
      </select>
      <select className="dropdown-inner padding" defaultValue="">
        <option value="" disabled>
          Select Section
        </option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </div>
  ));

  return <div className="dropdown-subjects">{dropdowns}</div>;
}

function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [nextClicked, setNextClicked] = useState(false);
  const [nextClicked1, setNextClicked1] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleNext = (event) => {
    if (selectedValue === "") {
      event.preventDefault();
    } else {
      console.log("Selected value:", selectedValue);
      setNextClicked(true);
    }
  };

  const handleNext1 = (event) => {
    if (selectedValue === "") {
      event.preventDefault();
    } else {
      console.log("Selected value:", selectedValue);
      setNextClicked1(true);
    }
  };

  const handleBack = () => {
    setNextClicked(false);
  };

  const handleBack1 = () => {
    setNextClicked1(false);
  };

  return (
    <div className="center-container">
      {!nextClicked && (
        <>
          <h1 className="center">Select Number of Subjects</h1>
          <select
            value={selectedValue}
            onChange={handleChange}
            className="center-dropdown"
          >
            <option value="" disabled>
              None
            </option>
            {[...Array(9)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </>
      )}
      {nextClicked && !nextClicked1 && (
        <>
          <h1 className="center">Select Subjects</h1>
          <DropdownList numDropdowns={parseInt(selectedValue)} />

          <button className="next-button-right" onClick={handleNext1}>
            Next
          </button>
          <button className="back-button-left" onClick={handleBack}>
            Back
          </button>
        </>
      )}
      {nextClicked1 && (
        <>
          <div className="center">
            <div className="rectangle-parent">
              <div className="group-child" />
              <div className="time">
                <div className="saturday-wrapper">
                  <div className="am monospace">8:30 AM</div>
                </div>
                <div className="am-container">
                  <div className="am monospace">10:00 AM</div>
                </div>
                <div className="am-frame">
                  <div className="am monospace">11:30 AM</div>
                </div>
                <div className="pm-wrapper">
                  <div className="am monospace">1:00 PM</div>
                </div>
                <div className="pm-container">
                  <div className="am monospace">2:30 PM</div>
                </div>
                <div className="pm-frame">
                  <div className="am monospace">4:00 PM</div>
                </div>
                <div className="frame-div">
                  <div className="am monospace">5:30 PM</div>
                </div>
              </div>
              <div className="monday-schedule">
                <div className="monday">
                  <div className="monday1 monospace">Monday</div>
                </div>
                <div className="div2">
                  <div className="class-name-here-container">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>
                <div className="div3">
                  <div className="class-name-here-container">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>
                <div className="div4">
                  <div className="class-name-here-container">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>
                <div className="div5">
                  <div className="class-name-here-container">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>
              </div>
              <div className="tuesday-schedule">
                <div className="monday">
                  <div className="tuesday1 monospace">Tuesday</div>
                </div>
                <div className="lab-0830-1130">
                  <div className="class-name-here-container6">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>

                <div className="lab-0100-0400">
                  <div className="class-name-here-container6">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>
              </div>
              <div className="wednesday-schedule">
                <div className="saturday-wrapper">
                  <div className="wednesday monospace">Wednesday</div>
                </div>
                <div className="div">
                  <div className="class-name-here-container">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>
              </div>
              <div className="thursday-schedule">
                <div className="saturday-wrapper">
                  <div className="thursday monospace">Thursday</div>
                </div>
                <div className="div1">
                  <div className="class-name-here-container">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>
                <div className="lab-0230-0540">
                  <div className="class-name-here-container6">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>
              </div>
              <div className="friday-schedule">
                <div className="saturday-wrapper">
                  <div className="friday monospace">Friday</div>
                </div>
                <div className="lab-1000-0100">
                  <div className="class-name-here-container6">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>
              </div>
              <div className="saturday-schedule">
                <div className="saturday-wrapper">
                  <div className="saturday monospace">Saturday</div>
                </div>
                <div className="lab-1130-0230">
                  <div className="class-name-here-container6">
                    <p className="class-name monospace">class name</p>
                  </div>
                  <div className="child" />
                  <div className="room monospace">room</div>
                </div>
              </div>
            </div>
          </div>
          <button className="back-button-left" onClick={handleBack1}>
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default App;
