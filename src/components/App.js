import React from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import FilterControls from "./FilterControls";
import NewHogForm from "./NewHogForm";
import hogsData from "../porkers_data";
import { useState } from "react";

function App() {
	const [hogs, setHogs] = useState(hogsData);
	const [showGreasedOnly, setShowGreasedOnly] = useState(false);
	const [sortOption, setSortOption] = useState(null);
	const [hiddenHogs, setHiddenHogs] = useState([]);
  
	// Filter hogs based on greased status
	const filteredHogs = showGreasedOnly ? hogs.filter(hog => hog.greased) : hogs;
  
	// Sort hogs based on the selected option
	const sortedHogs = [...filteredHogs].sort((a, b) => {
	  if (sortOption === "name") return a.name.localeCompare(b.name);
	  if (sortOption === "weight") return a.weight - b.weight;
	  return 0;
	});
  
	// Handle hiding a hog
	const hideHog = (name) => {
	  setHiddenHogs([...hiddenHogs, name]);
	};
  
	// Handle adding a new hog
	const addHog = (newHog) => {
	  setHogs([...hogs, newHog]);
	};
  
	// Display only hogs that are not hidden
	const displayedHogs = sortedHogs.filter(hog => !hiddenHogs.includes(hog.name));
  
	return (
	  <div className="App">
		<Nav />
		<FilterControls
		  showGreasedOnly={showGreasedOnly}
		  setShowGreasedOnly={setShowGreasedOnly}
		  setSortOption={setSortOption}
		/>
		<section className="ui grid container">
		  {displayedHogs.map(hog => (
			<HogTile
			  key={hog.name}
			  hog={hog}
			  hideHog={hideHog}
			/>
		  ))}
		</section>
		<NewHogForm addHog={addHog} />
	  </div>
	);
  }
  

export default App;
