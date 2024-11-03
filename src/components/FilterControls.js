import React from "react";

function FilterControls({ showGreasedOnly, setShowGreasedOnly, setSortOption }) {
  return (
    <div className="d-flex justify-content-center mb-4">
    <div className="ui card"> 
      <div className="content">
        <div className="header">Filter Options</div>
        <div className="description">
          <div className="form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              id="showGreasedOnly"
              checked={showGreasedOnly}
              onChange={() => setShowGreasedOnly(prev => !prev)}
            />
            <label className="form-check-label" htmlFor="showGreasedOnly">
              Show Greased Only
            </label>
          </div>
        </div>
      </div>
      <div className="extra content">
        <div className="ui buttons">
          <button
            className="ui button"
            onClick={() => setSortOption("name")}
          >
            Sort by Name
          </button>
          <div className="or"></div>
          <button
            className="ui button"
            onClick={() => setSortOption("weight")}
          >
            Sort by Weight
          </button>
        </div>
      </div>
    </div>
  </div>
  

  );
}

export default FilterControls;
