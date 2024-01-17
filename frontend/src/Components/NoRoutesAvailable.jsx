import React from "react";

function NoRoutesAvailable() {
  return (
    <div style={{ color: "red", textAlign: "center" }}>
      <h2>No Routes Available</h2>
      <p>Sorry, the requested route is not available.</p>
    </div>
  );
}

export default NoRoutesAvailable;