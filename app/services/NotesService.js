import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"

class NotesService {
    createNote(formData) {
        let newNote = new Note(formData)
        AppState.notes.push(newNote)
        AppState.activeNote = newNote
        AppState.emit('notes')
        AppState.emit('activeNote')
    }
}

export const notesService = new NotesService()