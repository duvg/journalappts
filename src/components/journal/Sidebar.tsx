import React from "react";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar pl-4 pr-4">
        <h3 className="mt-5">
          <i className="fas fa-tachometer-alt"></i> <span>Duviel</span>
        </h3>
        <button className="btn">Logout</button>
      </div>

      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};