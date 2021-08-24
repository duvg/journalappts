import React from "react";
import moment from "moment";
import { Note } from "../../redux/interfaces/Note";
import { useDispatch } from "react-redux";
import { activeNote } from "../../redux/actions/notes";
export const JournalEntry = ({ id, title, body, imageUrl, date }: Note) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(activeNote({ id, title, body, imageUrl, date }));
  };

  return (
    <div
      className="journal__entry mb-2 animate__animated animate__fadeInDown animate__faster"
      onClick={handleEntryClick}
    >
      {imageUrl && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundColor: "red",
            backgroundSize: "cover",
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title.substring(0, 30)}</p>
        <p className="journal__entry-content">{body.substring(0, 30)}</p>
      </div>

      <div className="journal__entry-date-box">
        <span className="mb-1">{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};
