import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { saveState } from "../utils/Store.js"

function _saveNotes() {
    saveState('notes', AppState.notes)
    console.log('saving', AppState.notes)
}

function _countWords(body){
    let wordCount = 0
    if(body[body.length] != ' ' && body != ''){
        wordCount++
    }
    for(let i =0; i < body.length; i++){
        if(body[i] == ' '){
            wordCount ++
        }
    }
    return wordCount
}

class NotesService {
    saveNote(updatedBody) {
        let active = AppState.activeNote
        active.body = updatedBody
        active.updatedAt = new Date()
        active.words = _countWords(updatedBody)
        active.characters = updatedBody.length
        AppState.emit('activeNote')
        _saveNotes()

    }
    deleteNote(noteId) {
        let currentNote = AppState.notes.find(note => note.id == noteId)
        let filteredNotes = AppState.notes.filter(note => note.id != noteId)
        AppState.notes = filteredNotes
        AppState.activeNote = null
        _saveNotes()
    }
    createNote(formData) {
        let newNote = new Note(formData)
        AppState.notes.push(newNote)
        AppState.activeNote = newNote
        AppState.emit('notes')
        AppState.emit('activeNote')
        _saveNotes()
    }
}

export const notesService = new NotesService()