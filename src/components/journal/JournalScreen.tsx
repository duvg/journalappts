import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";
import { NoteScreen } from "../notes/NoteScreen";
import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
  const { active } = useSelector((state: AppState) => state.notes);

  return (
    <div className="journal__main-content">
      <Sidebar />
      <main style={{ width: "100%" }}>
        {active?.date !== 0 ? <NoteScreen /> : <NothingSelected />}
      </main>
    </div>
  );
};
