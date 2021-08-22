import React from "react";
import { useDispatch } from "react-redux";
import { startLogOutAction } from "../../redux/actions/auth";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogOutAction());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar pl-4 pr-4">
        <h3 className="mt-5">
          <i className="fas fa-tachometer-alt"></i> <span>Duviel</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
