import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogOutAction } from "../../redux/actions/auth";
import { JournalEntries } from "./JournalEntries";
import { AppState } from "../../redux/store/store";
import { startNewNote } from "../../redux/actions/notes";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: AppState) => state.auth);

  const handleLogout = () => {
    dispatch(startLogOutAction());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  return (
    <aside className="journal__sidebar animate__animated animate__fadeInLeft animate__faster">
      <div className="journal__sidebar-navbar pl-4 pr-4">
        <h3 className="mt-5">
          <i className="fas fa-tachometer-alt"></i> <span>{name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry" onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
