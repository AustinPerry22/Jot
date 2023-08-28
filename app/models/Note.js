import { generateId } from "../utils/generateId.js"

export class Note {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color || '#ffffff'
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
    this.words = data.words || 0
    this.characters = data.characters || 0
    this.active = data.active || false
  }

  get template() {
    return `
    <div class="col-12">
            <h4 style="color: ${this.color}"class="noteSelect selectable" data-bs-dismiss="offcanvas" onclick="app.NotesController.selectNote('${this.id}')">${this.title}</h4>
          </div> 
    `
  }

  get activeTemplate() {
    return `
        
      <div class="col-10 border-active">
        <section class="row justify-content-end pt-3">
          <div class="col-6">
            <h4 class="ps-3" style="color: ${this.color}">${this.title}</h4>
            
          </div>
          <div class="col-6 text-end">
            <button class="btn btn-danger rounded-5" onclick="app.NotesController.deleteNote('${this.id}')"><i class="mdi mdi-delete"></i></button>
          </div>
        </section>

        <section class="row">
          <div class="col-12 col-md-3 ps-4">
            <p class="py-md-3">Created at: ${this.createdTime.toDateString()} ${this.createdTime.toLocaleTimeString()}</p>
            <p class="py-md-3">Updated at: ${this.updatedAt.toDateString()} ${this.updatedAt.toLocaleTimeString()}</p>
            <p class="py-md-3">Words: ${this.words}</p>
            <p class="py-md-3">Characters: ${this.characters}</p>
          </div>

          <div class="col-12 col-md-9 pb-4">
            <textarea type="text" name="noteText" id="noteText" class="w-85" style="border-color: ${this.color}">${this.body}</textarea>
            <button class="btn btn-success w-85" onclick="app.NotesController.saveNote('${this.id}')"><i class="mdi mdi-floppy"></i>Save</button>
          </div>
        </section>
      </div>
        `
  }
}