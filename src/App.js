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
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <select className="dropdown-inner padding" defaultValue="">
        <option value="" disabled>
          Select Section
        </option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="English">English</option>
      </select>
    </div>
  ));

  return <div className="dropdown-subjects">{dropdowns}</div>;
}

function Timetable() {
  return (
    <div className="timetable">
      <div className="time-column">
        <div className="time">9:00</div>
        <div className="time">10:00</div>
        <div className="time">11:00</div>
        <div className="time">12:00</div>
        <div className="time">1:00</div>
        <div className="time">2:00</div>
        <div className="time">3:00</div>
        <div className="time">4:00</div>
      </div>
      <div className="day-row">
        <div className="day">Monday</div>
        <div className="day">Tuesday</div>
        <div className="day">Wednesday</div>
        <div className="day">Thursday</div>
        <div className="day">Friday</div>
      </div>
      <div className="class-grid">
        <div className="class"></div>
        <div className="class">Math</div>
        <div className="class"></div>
        <div className="class"></div>
        <div className="class"></div>
        <div className="class"></div>
        <div className="class">Science</div>
        <div className="class"></div>
        <div className="class"></div>
        <div className="class"></div>
        <div className="class"></div>
        <div className="class">English</div>
      </div>
    </div>
  );
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
          {/* <div>
            <div className="time center">
              <div className="icon">8:30 AM</div>
              <div className="icon">10:00 AM</div>
              <div className="icon">11:30 AM</div>
              <div className="icon">1:00 PM</div>
              <div className="icon">2:30 PM</div>
              <div className="icon">4:00 PM</div>
              <div className="icon">5:30 PM</div>
            </div>
            <div className="days center">
              <div className="icon">Monday</div>
              <div className="class center">
                <div className="class-icon"></div>
                <div className="class-icon"></div>
                <div className="class-icon"></div>
                <div className="class-icon"></div>
                <div className="class-icon"></div>
                <div className="class-icon"></div>
                <div className="class-icon"></div>
              </div>
            </div>
          </div> */}
          <button className="back-button-left" onClick={handleBack1}>
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default App;
