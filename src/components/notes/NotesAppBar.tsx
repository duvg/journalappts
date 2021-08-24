import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadingImage } from "../../redux/actions/notes";
import { AppState } from "../../redux/store/store";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state: AppState) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    const fileImageControl = document.querySelector(
      "#fileSelector"
    ) as HTMLInputElement;
    fileImageControl.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      const file = e.target.files[0];

      if (file) {
        dispatch(startUploadingImage(file));
      }
    }
  };
  return (
    <div className="notes__appbar animate__animated animate__fadeInDown animate__faster">
      <span>20 de agosto de 2020</span>
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
