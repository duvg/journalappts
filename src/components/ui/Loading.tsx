import React from "react";

export const Loading = () => {
  return (
    <div className="loading__lds-content">
      <h2 className="journal__app-title">
        Journal <span>App</span>{" "}
      </h2>
      <div className="loading__lds-dual-ring"></div>
      <div className="loading__lds-text mt-5">Loading...</div>
    </div>
  );
};
