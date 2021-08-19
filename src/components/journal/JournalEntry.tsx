import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry mb-2">
      <div
        className="journal__entry-picture"
        style={{
          backgroundColor: "red",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_960_720.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
