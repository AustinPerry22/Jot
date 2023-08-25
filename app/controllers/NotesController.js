import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
import { setHTML } from "../utils/Writer.js"

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
        notesService.initService()
        _drawNotes()
        _drawActive()
    }

}