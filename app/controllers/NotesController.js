import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js";

function _drawNotes() {
    let notes = AppState.notes
    let content = ''
    console.log("drawingNotes")
    notes.forEach(note => content += note.template)
    setHTML('notesList', content)
}

function _drawActive() {
    let activeNoteContent = AppState.activeNote.activeTemplate
    setHTML('activeNote', activeNoteContent)
}
export class NotesController {
    constructor() {
        console.log('hello from the notes controller')
        _drawNotes()
        _drawActive()
        AppState.on('notes', _drawNotes)
        AppState.on('activeNote', _drawActive)
    }

    selectNote(noteId) {
        let foundNote = AppState.notes.find(note => note.id == noteId)
        AppState.activeNote = foundNote
        AppState.emit('activeNote')
    }

    createNote() {
        window.event.preventDefault()
        const form = window.event.target
        const formData = getFormData(form)
        notesService.createNote(formData)
    }

    saveNote(noteId) {

    }

    deleteNote(noteId) {

    }

}