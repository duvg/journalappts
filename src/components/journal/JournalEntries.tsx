import React from "react";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5, 6];
  return (
    <div className="journal__entries pl-4 pr-4 pointer">
      {entries.map((value) => (
        <JournalEntry key={value} />
      ))}
    </div>
  );
};
