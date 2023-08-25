import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"

class NotesService {
    saveNote(updatedBody) {
        let active = AppState.activeNote
        active.body = updatedBody
        active.updatedAt = new Date()
        AppState.emit('activeNote')

    }
    deleteNote(noteId) {
        throw new Error("Method not implemented.")
    }
    createNote(formData) {
        let newNote = new Note(formData)
        AppState.notes.push(newNote)
        AppState.activeNote = newNote
        AppState.emit('notes')
        AppState.emit('activeNote')
    }
}

export const notesService = new NotesService()