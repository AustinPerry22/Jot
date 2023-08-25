export const NotesView = /*html*/`
<section class="row justify-content-between">
<div class="offcanvas offcanvas-start bg-primary" tabindex="-1" id="offcanvas" aria-controls="offcanvas">
<div class="offcanvas-header">
  <h3 class="offcanvas-title">Jots: <span id="notesNumber">0</span></h3>
  <button type="btn btn-close col-2" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
</div>
<div class="offcanvas-body row">
  <div class="col-12 justify-content-between  height100">
    <section class="row" id="notesList">
    </section>

    <form class="row justify-content-evenly pt-3" onsubmit="app.NotesController.createNote()">
      <label for="title">NEW NOTE</label>
      <input class="col-2" type="color" name="color">
      <input class="col-7" type="text" placeholder="Note Title" required minlength="3" maxlength="15" name="title">
      <button class="col-3" type="submit">Add</button>
    </form>
  </div>
</div>
</div>




      <!-- Active View -->
      <div class="col-md-8 pt-5" id="activeNote">
        <!-- <section class="row justify-content-between">
          <div class="col-6">
            <h4>HTML</h4>
          </div>

          <div class="col6"></div>
        </section>
        
        <section class="row">
          <div class="col-2">
            <p>Created at</p>
            <p>Updated at</p>
            <p>Words Characters</p>
          </div>

          <div class="col-10">
            <textarea name="noteText" id="" cols="70" rows="20"></textarea>
            <section class=" row justify-content-start">
              <button class="btn btn-success col-3 me-5 ms-3"><i class="mdi mdi-floppy"></i>Save</button>
              <button class="btn btn-danger col-3 ms-5"><i class="mdi mdi-delete"></i>Delete</button>
            </section>
          </div>
        </section> -->
      </div>
    </section>
    </div>
    </section>
`