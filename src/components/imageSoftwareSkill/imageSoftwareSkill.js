import React from "react";
// import "./SoftwareSkill.scss";
// import {skillsSection} from "../../portfolio";

export default function imageSoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          <li key="10" className="software-skill-inline" name="Java">
            <img src="https://img.icons8.com/nolan/64/java-coffee-cup-logo.png" />
            <p>Java</p>
          </li>
          <li key="11" className="software-skill-inline" name="Python">
            <img src="https://img.icons8.com/color/48/000000/python.png" />
            <p>Python</p>
          </li>
          <li key="12" className="software-skill-inline" name="C++">
            <img src="https://img.icons8.com/ios-filled/50/000000/c-plus-plus-logo.png" />
            <p>C++</p>
          </li>
          <li key="13" className="software-skill-inline" name="MATLAB">
            <img src="https://img.icons8.com/fluent/48/000000/matlab.png" />
            <p>MATLAB</p>
          </li>
          <li key="14" className="software-skill-inline" name="VHDL">
            <img src="https://img.icons8.com/cute-clipart/64/000000/v.png" />
            <p>VHDL</p>
          </li>
          <li key="15" className="software-skill-inline" name="AutoDesk Eagle">
            <img src="https://img.icons8.com/color/48/000000/autodesk.png" />
            <p>AutoDesk Eagle</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
