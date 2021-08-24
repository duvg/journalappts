import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const { notes } = useSelector((state: AppState) => state.notes);

  useEffect(() => {}, [notes]);
  return (
    <div className="journal__entries pl-4 pr-4 pointer">
      {notes.map((note) => (
        <JournalEntry key={note.id} {...note} />
      ))}
    </div>
  );
};
