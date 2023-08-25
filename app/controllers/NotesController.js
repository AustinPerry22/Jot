import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
import { setHTML, setText } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

function _drawNotes() {
    let notes = AppState.notes
    let content = ''
    let noteTotal = 0
    notes.forEach(note => {
        content += note.template
        noteTotal++
    })
    setText('notesNumber', noteTotal)
    setHTML('notesList', content)
}

function _drawActive() {
    if (AppState.activeNote) {
        let activeNoteContent = AppState.activeNote.activeTemplate
        setHTML('activeNote', activeNoteContent)
    } else {
        setHTML('activeNote', '')
    }
}
export class NotesController {
    constructor() {
        _drawNotes()
        _drawActive()
        AppState.on('notes', _drawNotes)
        AppState.on('activeNote', _drawActive)
    }

    selectNote(noteId) {
        let foundNote = AppState.notes.find(note => note.id == noteId)
        AppState.activeNote = foundNote
    }

    createNote() {
        window.event.preventDefault()
        const form = window.event.target
        const formData = getFormData(form)
        notesService.createNote(formData)
    }

    saveNote() {
        let textArea = document.querySelector('textarea')
        let updatedBody = textArea.value
        notesService.saveNote(updatedBody)
    }

    async deleteNote(noteId) {
        if (await Pop.confirm("Are you sure you want to delete this note?")) {
            notesService.deleteNote(noteId)
        }
    }

}