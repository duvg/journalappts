import { Note, NoteInitialState } from "../interfaces/Note"
import { noteTypes } from "../types/noteTypes"

const activeNoteInitialState: Note = {
    id: "",
    title: "",
    body: "",
    date: 0,
    imageUrl: ""
}

const initialState: NoteInitialState = {
    notes: [],
    active: activeNoteInitialState
}

export const notesReducer = (state= initialState, action:noteTypes ) => {
    switch (action.type) {
        case "[Notes] Add New": {
            const newState = { ...state };
            newState.notes = [
                action.payload,
                ...state.notes
            ];
            return {
                ...newState
            }
        }
        case "[Notes] Set Active Note":
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case "[Notes] Load Notes":
            return {
                ...state,
                notes: [ ...action.payload ]
            }
        case "[Notes] Updated Note": {
            console.log(action.payload);
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload
                        : note
                )
            }
        }
        case "[Notes] Delete Note": {
            const nstate = { ...state };
            nstate.active = activeNoteInitialState;
            nstate.notes = nstate.notes.filter(note => note.id !== action.payload);
            
            return {
                ...nstate,
            }
        }
        case "[Notes] Logout Cleaning":
            return {
                ...initialState
            }
        default:
            return state;
    }
}