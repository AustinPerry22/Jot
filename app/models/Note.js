import { generateId } from "../utils/generateId.js"

export class Note {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.color = data.color || '#000000'
        this.title = data.title || 'Title'
        if (data.createdTime) {
            this.createdTime = new Date(data.createdTime)
        } else {
            this.createdTime = new Date()
        }
        if (data.updatedAt) {
            this.updatedAt = new Date(data.updatedAt)
        } else {
            this.updatedAt = new Date()
        }
        this.body = data.body || ''
        this.words = data.words || ''
        this.characters = data.characters || ''
    }

    get template() {
        return `
    <div class="col-12">
            <h4 style="color: ${this.color}"class="noteSelect" onclick="app.NotesController.selectNote('${this.id}')">${this.title}</h4>
          </div> 
    `
    }

    get activeTemplate() {
        return `
        <section class="row justify-content-between">
          <div class="col-6">
            <h4 style= "color: ${this.color}">${this.title}</h4>
          </div>

          <div class="col6"></div>
        </section>
       
        <section class="row">
          <div class="col-2">
            <p>Created on: ${this.createdTime.toDateString()} ${this.createdTime.toLocaleString()}</p>
            <p>Updated at: ${this.updatedAt.toDateString()} ${this.updatedAt.toLocaleString()}</p>
            <p>Words:${this.words} Characters: ${this.characters}</p>
          </div>

          <div class="col-10">
            <textarea cols="70" rows="20">${this.body}</textarea>
            <section class=" row justify-content-start">
              <button class="btn btn-success col-3 me-5 ms-3" onclick="app.NotesController.saveNote('${this.id}')"><i class="mdi mdi-floppy"></i>Save</button>
              <button class="btn btn-danger col-3 ms-5" onclick="app.NotesController.deleteNote('${this.id}')"><i class="mdi mdi-delete"></i>Delete</button>
            </section>
          </div>
        </section>
        `
    }
}

// ${this.title} my name is ${this.name}, date = ${this.createdTime.toDateString()} ${this.createdTime.toLocaleString([], { hour: "2-digit", minute: '2-digit' })}