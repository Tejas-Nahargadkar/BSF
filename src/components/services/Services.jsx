import React from "react";
import "./services.css";

export default function Services() {
  return (
    <div className="Services">
      <div className="JobVacancy">
        <h1>REGISTRATION</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="Enter your Name"
        ></input>

        <input
          type="date"
          placeholder="Enter Your DOB"
          name="Enter your DOB"
        ></input>

        <input
          type="text"
          placeholder="Enter Your Address"
          name="Enter your Address"
        ></input>

        <input
          type="text"
          placeholder="Enter Your contact No"
          name="Enter your Contact No"
        ></input>

        <input
          type="text"
          placeholder="Upload Your Resume "
          name="Upload your Resume"
        ></input>

        <button className="button button2">SAVE</button>
        <button className="button button2">CLEAR</button>
      </div>

      <div className="Image">
        <section>
          <div class="wrapper">
            <div class="fill">
              <h1 class="">REGISTER YOURSELF</h1>
            </div>
            <div class="lamp">
              <div class="bulb"></div>
              <div class="stand"></div>
              <div class="base"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
