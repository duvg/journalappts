import { Note } from "../interfaces/Note";

export interface NotePayload {
    id: string;
    title?: string;
    body?: string;
    date?: number;
    imageUrl?: string
}

export interface ActiveNotePayload {
    id: string;
    note: Note;
}

export interface UpdatedNote {
    note: Note
}

export type noteTypes =
    // Notes types - Crud Notes
    | { type: '[Notes] Add New', payload: Note }
    | { type: '[Notes] Set Active Note', payload: Note }
    | { type: '[Notes] Load Notes', payload: Note[] }
    | { type: '[Notes] Updated Note', payload: Note }
    | { type: '[Notes] Updated image url' }
    | { type: '[Notes] Delete Note', payload: string }
    | { type: '[Notes] Logout Cleaning' }
    