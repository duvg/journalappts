import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeleteNote } from "../../redux/actions/notes";
import { AppState } from "../../redux/store/store";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { active: note } = useSelector((state: AppState) => state.notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(note);

  const { title, body, date, imageUrl, id } = formValues;

  const activeId = useRef(note?.id);
  const activeImg = useRef(note?.imageUrl);

  //console.log(note);

  useEffect(() => {
    if (note?.id !== activeId.current) {
      reset(note);
      activeId.current = note?.id;
    }
    // else if (note.imageUrl !== activeImg.current) {
    //   reset(note);
    //   activeImg.current = note?.imageUrl;
    // }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote({ ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleteNote(id));
  };

  return (
    <div className="notes__main-content animate__animated animate__fadeIn">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="What happened today"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {imageUrl && (
          <div className="notes__image">
            <img src={imageUrl} alt="load" />
          </div>
        )}
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
