import React,{ useState } from "react";
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

function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [nextClicked, setNextClicked] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleNext1 = (event) => {
    if (selectedValue === "") {
      event.preventDefault();
    } else {
      console.log("Selected value:", selectedValue);
      setNextClicked(true);
    }
  };

  const handleBack = () => {
    setNextClicked(false);
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
          <button className="next-button" onClick={handleNext1}>
            Next
          </button>
        </>
      )}
      {nextClicked && (
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
      
    </div>
  );
}

export default App;
