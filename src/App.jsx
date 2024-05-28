import "./App.css";
import Component from "./components/Component";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="main_container">
      <Navbar />
      <div style={{ flex: "1 1 0%" }}>
        <Heading />
        <div className="card">
          <Component />
        </div>
      </div>
    </div>
  );
}

export default App;
