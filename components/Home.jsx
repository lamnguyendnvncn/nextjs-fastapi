import React from "react";
import "./home.css";
import MAP from "../../assets/3d-casual-life-trail-map.png";

function Home() {
  return (
    <div className="background">
      <div className="container container-grid">
        {/* Col 1 */}
        <div>
          <h1>Get Lost in Adventure, Never in Confusion.</h1>
          <p>
            Get tailored recommendations on where to go, when, and how to make the most of your time and budget.
          </p>
          <a href="/preferences" className="btn">
            Start here!
          </a>
        </div>
        {/* Col 2 */}

        <div className="image-fit up-down">
          <img
            className="drop-shadow"
            src="https://img.pikbest.com/origin/09/24/92/79bpIkbEsTgTF.png!sw800"
            alt="robot image"
          />
        </div>

        {/* Col 3 */}
        <div className="image-fit ">
          <img className="up-down drop-shadow" src={MAP} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
