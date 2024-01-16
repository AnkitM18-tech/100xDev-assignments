import React from "react";
import ReactDOM from "react-dom/client";
import BusinessCard from "./BusinessCard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BusinessCard
      name={"Ankit Kumar Mohanty"}
      description={"Geek"}
      interests={["Trek", "Eat", "Learn"]}
    />
  </React.StrictMode>
);
