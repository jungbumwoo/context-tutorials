import React from "react";
import LeftPane from "./components/Leftpane";
import RightPane from "./components/Rightpane";

const App = () => {
  return (
    <div className="panes">
      <LeftPane />
      <RightPane />
    </div>
  )
};

export default App;