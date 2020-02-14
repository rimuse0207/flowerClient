import React from "react";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
