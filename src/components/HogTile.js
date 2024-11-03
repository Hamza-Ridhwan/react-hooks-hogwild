import React, { useState } from "react";

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui five wide column">
      <div className="ui card">
  <div className="image">
    <img src={hog.image} alt={hog.name} />
  </div>
  <div className="content">
    <h2 className="header">{hog.name}</h2>
    {showDetails && (
      <div className="description">
        <p><strong>Specialty:</strong> {hog.specialty}</p>
        <p><strong>Weight:</strong> {hog.weight} kg</p>
        <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
        <p><strong>Highest Medal:</strong> {hog["highest medal achieved"]}</p>
      </div>
    )}
  </div>
  <div className="extra content">
    <button 
      className="ui button" 
      onClick={() => setShowDetails(!showDetails)}
    >
      {showDetails ? "Hide Details" : "Show Details"}
    </button>
    <button 
      className="ui red button" 
      onClick={() => hideHog(hog.name)}
    >
      Hide Hog
    </button>
  </div>
</div>

    </div>
  );
}

export default HogTile;
