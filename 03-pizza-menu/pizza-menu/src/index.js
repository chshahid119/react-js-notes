import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

function Header() {}
function Menu() {}
function Footer() {}

// React Version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />,document.getElementById("root"));
