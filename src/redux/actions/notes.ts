import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import Swal from "sweetalert2";
import { db } from "../../firebase/firebase-config"
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { Note } from "../interfaces/Note";
import { AppState } from "../store/store"
import { NotePayload, noteTypes } from "../types/noteTypes";
import {types} from '../types/types';


export const startNewNote = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => AppState) => {
        const { uid } = getState().auth;
        

        const newNote: Note = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrl: "",
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        newNote.id = docRef.id;

        console.log(newNote);
        dispatch(addNewNote(newNote));
        dispatch(activeNote(newNote));
        
    }
}

export const addNewNote = ( note: Note): noteTypes => ({
    type: "[Notes] Add New",
    payload: note
})

export const activeNote = (note: Note): types => ({
    type: "[Notes] Set Active Note",
    payload: note
});

export const startLoadingNotes = (uid: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes: Note[]): types => ({
    type: "[Notes] Load Notes",
    payload: [...notes]
});


export const startSaveNote = (note: Note) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState:() => AppState ) => {
        const { uid } = getState().auth;
        
        const noteToFirestore = { ...note };
        if (!note?.imageUrl) {
            delete note?.imageUrl
        }

        delete noteToFirestore.id;
        await db.doc(`${uid}/journal/notes/${note?.id}`).update(noteToFirestore);

        dispatch(refreshNotes(note));

        Swal.fire('Saved', note.title, 'success');

    }
}


export const refreshNotes = (note: Note): types => {
    
    return {
        type: "[Notes] Updated Note",
        payload: note
    }
}


export const startUploadingImage = (file: File) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => AppState ) => {
        const { active: ActiveNote } = getState().notes;

        Swal.fire({
            title: "Uploading",
            text: "Please wait...",
            allowOutsideClick: false,
        });
        Swal.showLoading();
        
        
        const fileUrl = await fileUpload(file);
        ActiveNote.imageUrl = fileUrl;

        dispatch<any>(startSaveNote(ActiveNote));

        Swal.close();
    }
}

export const startDeleteNote = (id: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => AppState) => {
        
        try {
            const { uid } = getState().auth;
            await db.doc(`/${uid}/journal/notes/${id}`).delete();
            dispatch(deleteNote(id));
        } catch (error) {
            Swal.fire('Error', "Error to delete the Note", "error");
        }

    }
}

export const deleteNote = (id: string): noteTypes => ({
    type: "[Notes] Delete Note",
    payload: id
});

export const noteLogout = (): noteTypes => ({
    type: "[Notes] Logout Cleaning"
});