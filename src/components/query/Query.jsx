import React from "react";
import "./query.css";
export const Query = () => {
  return (
    <div className="Query">
      <div className="QueryForm">
        <h1>Query</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="Enter your Name"
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
          placeholder="Enter Your Questions "
          name="Your Question"
        ></input>

        <button className="button button2">SAVE</button>
        <button className="button button2">CLEAR</button>
      </div>

      <div className="Image">
        <section>
          <div class="wrapper">
            <div class="fill">
              <h1 class="">Do you Have any Query</h1>
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
};
