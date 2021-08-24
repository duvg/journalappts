
import { db } from '../firebase/firebase-config';
import { Note } from '../redux/interfaces/Note';

export const loadNotes = async (uid: string) => {
    
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes: Note[] = [];

    
    notesSnap.forEach(snapChild => {
        const note: any = {
            id: snapChild.id,
            ...snapChild.data()
        }
        notes.push(note);

        
    });

    return notes;
}