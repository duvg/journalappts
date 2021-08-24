
export interface Note {
    id?: string;
    title: string;
    body: string;
    imageUrl?: string;
    date: number;
}

export interface NoteInitialState {
    notes: Note[],
    active: Note 
}
