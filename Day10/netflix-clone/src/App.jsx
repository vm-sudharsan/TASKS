import React, { Suspense } from "react";
import "./styles/App.css";


const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
