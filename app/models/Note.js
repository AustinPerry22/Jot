export class Note {
    constructor(data) {
        this.name = data.name
        this.color = data.color
        this.title = data.title || 'Title'
        this.createdTime = data.createdTime || new Date()
        this.updatedAt = data.updatedAt || new Date()
        this.body = data.body || ''
        this.words = data.words || ''
        this.characters = data.characters || ''
    }

    get template() {
        return `
    <div class="col-12">
            <h4>${this.title}</h4>
          </div> 
    `
    }

    get activeTemplate() {
        return `
        <section class="row justify-content-between">
          <div class="col-6">
            <h4>${this.title}</h4>
          </div>

          <div class="col6"></div>
        </section>
       
        <section class="row">
          <div class="col-2">
            <p>Created on: ${this.createdTime.toDateString()} ${this.createdTime.toLocaleString([], { hour: "2-digit", minute: '2-digit' })}</p>
            <p>Updated at: ${this.updatedAt.toDateString()} ${this.updatedAt.toLocaleString([], { hour: "2-digit", minute: '2-digit' })}</p>
            <p>Words:${this.words} Characters: ${this.characters}</p>
          </div>

          <div class="col-10">
            <textarea name="noteText" id="" cols="70" rows="20"></textarea>
            <section class=" row justify-content-start">
              <button class="btn btn-success col-3 me-5 ms-3"><i class="mdi mdi-floppy"></i>Save</button>
              <button class="btn btn-danger col-3 ms-5"><i class="mdi mdi-delete"></i>Delete</button>
            </section>
          </div>
        </section>
        `
    }
}

// ${this.title} my name is ${this.name}, date = ${this.createdTime.toDateString()} ${this.createdTime.toLocaleString([], { hour: "2-digit", minute: '2-digit' })}