import React from "react";
import LeftPane from "./components/Leftpane";
import RightPane from "./components/Rightpane";
import { SampleProvider } from "./contexts/sample";

const App = () => {
  return (
    <SampleProvider>
      <div className="panes">
        <LeftPane />
        <RightPane />
    </div>
    </SampleProvider>
  )
};

export default App;