import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
import { setHTML } from "../utils/Writer.js"

function _drawNotes() {
    let notes = AppState.notes
    let content = ''
    notes.forEach(note => content += note.template)
    setHTML('notes', content)
}
export class NotesController {
    constructor() {
        console.log('hello from the notes controller')
        notesService.initService()
        _drawNotes()
    }

}